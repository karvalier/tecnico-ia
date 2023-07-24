import React from 'react';
import Image from 'next/image';
import EntryChatSVG from '../statics/images/entry-chat.svg'
import DeleteChatSVG from '../statics/images/delete-chat.svg'

interface EntryHistoricalProps {
    description: string;
    hora: string;
    onDelete: () => void;
    onApply: () => void;
  }
  
  const EntryHistorical : React.FC<EntryHistoricalProps> = ({description, hora, onDelete, onApply }) => {
    const formHora = new Date(hora).toDateString();
    return (
      <div className='flex items-center h-[61px] box-border py-4 px-6 mb-4 rounded hover:bg-orange-200'>
        <div className='flex items-center' onClick={() => onApply()} >
          <div className='mr-4'>
            <Image
              src={EntryChatSVG}
              alt="entry chat"
              width={35}
              height={35}
            />
          </div>
          <div>
              <div className='font-medium'>{description.slice(0, 30)}</div>
              <div className='text-sm opacity-75'>{formHora}</div>
          </div>
        </div>
        <div className='ml-auto flex'>
          <button onClick={() => onDelete()}>
            <Image
              src={DeleteChatSVG}
              alt="entry chat"
              width={19}
              height={21}
            />
          </button>
        </div>
      </div>
    );
  };
  
  export default EntryHistorical;