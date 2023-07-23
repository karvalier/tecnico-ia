import Message from '@/components/Message'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full mb-5" style={{ flex: 1}}>
      <div className="h-full w-full px-8 py-6 ">
        <div className='h-full border-[1.5px] rounded-lg ' >
          <div className='bg-white flex justify-between items-center p-5 py-3 mb-3 rounded-t-lg'>
            <div className='font-semibold'>OdamaChat</div>
            <button className="bg-orange-500 w-[183px] h-[39px] rounded font-medium text-white"
              >
                Nueva Búsqueda
              </button>
          </div>
          <div className='content-messages'>
            <Message type='user' name="Ana Clara" hora='05:00 pm' text='Necesito los archivos que te pedí ayer.'/>

            <Message 
              type='chat' 
              name="OdamaChat" 
              hora='05:00 pm' 
              text='Lorem ipsum dolor

              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
            />

          </div>
          <div className='bg-white mt-6 border-t flex justify-between p-5 py-3 rounded-b-lg'>
            <input
              type="text"
              className="w-full h-10 border border-blue-500 border-opacity-100 border-solid border-1.5 rounded-md p-2"
              placeholder="Insertar prompt"
            />
          </div>


        </div>
      </div>


    </main>
  )
}
