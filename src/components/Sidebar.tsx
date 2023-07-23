// src/components/Sidebar.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import EntryHistorical from './EntryHistorical';

interface SidebarProps {
  // Agrega aquí cualquier otra prop que necesites del store
}

const Sidebar: React.FC<SidebarProps> = () => {
  // Obtenemos el valor de isOpen del estado del store
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  return (
    <div  className={`w-5/12 z-10 pl-8 pt-6 transition-all ease-in-out duration-300 ${isOpen ? '' : ' absolute left-0'} ${isOpen ? '' : '-translate-x-full'}`}>
      <div className='bg-white p-5 pb-12 rounded-lg mb-5 shadow-sm	'>
        <div className='font-semibold mb-5 text-xl'>Sistema</div>
        <div className='mb-9 font-normal'>Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.</div>
        <input
          type="text"
          className="w-full h-10 border border-blue-500 border-opacity-100 border-solid border-1.5 rounded-md p-2"
          placeholder="Insertar prompt"
        />
      </div>
      <div className='bg-white pb-12 rounded-lg shadow-sm mb-10	'>
        <div className='bg-white flex justify-between items-center p-5 py-5 mb-3 rounded-t-lg border-b'>
            <div className='font-semibold'>Historial de Búsquedas</div>
          </div>
        <div className='px-5 pr-3 mr-2' style={{ maxHeight: '413px', overflowY: 'scroll'}}>
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />
          <EntryHistorical description='Nuevo Chat' hora='Ayer, quedan 3 hs.' />

        </div>

      </div>
    </div>
  );
};

export default Sidebar;