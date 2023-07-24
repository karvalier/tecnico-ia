"use client"
import { Key, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '@/components/Message'
import chatState, { sendMessage } from '@/store/chat.state';
import { StoreType } from '../store/store';
import { MessageType } from '@/types/Chat';
import Image from 'next/image'
import SendSVG from '../statics/images/send.svg';
import CirclePlusSVG from '../statics/images/icon-plus-circle.svg'

export default function Home() {
  const messagesChat = useSelector((state: StoreType) => state.chats.chatSelected);
  const [message, setMessage ] = useState<string>('');
  const dispatch = useDispatch();
  const user = "Ana Clara";

  const Send = () => {
    dispatch(chatState.actions.addMessage({props: message, user: user, date: new Date().toString()}));
    dispatch(sendMessage(message, user, (value: MessageType) => dispatch(chatState.actions.addMessage(value))))
    setMessage('')
  }

  return (
    <main className="w-full mb-5" style={{ flex: 1}}>
      <div className="h-full w-full px-8 py-6 ">
        <div className='h-full border-[1.5px] rounded-lg ' >
          <div className='bg-white flex justify-between items-center p-5 py-3 mb-3 rounded-t-lg'>
            <div className='font-semibold'>OdamaChat</div>
            <button 
              className="flex justify-center items-center bg-orange-500 w-[183px] h-[39px] rounded font-medium text-white"
              onClick={() => dispatch(chatState.actions.createNewChat())}
              >
                <Image
                src={CirclePlusSVG}
                alt="Sidebar Icon"
                className='mr-2'
                width={20}
                height={20}
              />
                Nueva Búsqueda
              </button>
          </div>
          <div className='content-messages min-h-[300px]'>
            {(!messagesChat?.messages || messagesChat?.messages?.length ===  0) && 
              <div className="text-center opacity-20">Bienvenido a OdamaChat!!</div>
            }
            {messagesChat?.messages?.map((message : MessageType, key: Key | null | undefined) => 
              <Message 
                key={key}
                type={message.user === 'OdamaChat' ? 'chat' : 'user'} 
                name={message.user} 
                hora={message.date} 
                text={message.props}
              />
              )}
            
          </div>
          <div className='relative bg-white mt-6 border-t flex justify-between p-5 py-3 rounded-b-lg'>
            <input
              type="text"
              value={message}
              className="w-full h-10 border border-blue-500 border-opacity-100 border-solid border-1.5 rounded-md p-2"
              placeholder="Insertar prompt"
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && message !== '') {
                  Send()
                }
              }}
            
            />
            <button
              style={{
                position: 'absolute',
                top: 0,
                right: '10px',
                height: '100%',
                width: '2.5rem', // Ajusta el ancho según tus necesidades
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={Send}
            >
              <Image
                src={SendSVG}
                alt="Sidebar Icon"
                width={20}
                height={20}
              />
            </button>
          </div>


        </div>
      </div>


    </main>
  )
}
