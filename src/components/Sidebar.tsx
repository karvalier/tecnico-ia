// src/components/Sidebar.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import EntryHistorical from './EntryHistorical';
import { ChatType } from '@/types/Chat';
import chatState from '@/store/chat.state';
import { useDispatch } from 'react-redux';
import { StoreType } from '@/store/store';

interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = () => {
  const chats : ChatType[] = useSelector((state: any) => state.chats.chats);
  const messagesChat = useSelector((state: StoreType) => state.chats.chatSelected);

  const isOpen = useSelector((state: any) => state.sidebar.isOpen);
  const dispatch = useDispatch();

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
          {chats?.filter(item => item.id !== messagesChat.id)?.map( item => 
            <EntryHistorical 
              key={item.id} 
              description={item?.messages[0]?.props} 
              hora={item.date}
              onDelete={() => dispatch(chatState.actions.deleteChat(item.id))}
              onApply={() => dispatch(chatState.actions.selectChat(item.id))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;