interface MessageProps {
  name: string;
  hora: string;
  text: string;
  type: 'user' | 'chat'
}

const Message : React.FC<MessageProps> = ({name, hora, text, type}) => {
  const returnDate = () => {
    var dateMessage = new Date(hora).toLocaleString().split(",")[0]; 
    var dateActual = new Date().toLocaleString().split(",")[0];
    return dateMessage === dateActual ? new Date(hora).toLocaleTimeString('en-US'): new Date(hora).toLocaleString('en-US')
  }
  return (
    <div className='px-5 py-2.5'>
      <div className='bg-white pt-5 rounded-lg shadow-sm	'>
        <div className=' font-normal flex mx-5 pb-5 border-b'>
          <div className={`mr-2 font-semibold ${type === 'chat' ?  'text-yellow-500' : 'text-green-600'}`}>
            {name}
          </div>
          <div>
            {returnDate()}
          </div>
        </div>
        <div className=' font-normal p-5 border-b'>{text}</div>
      </div>
    </div>
  );
};

export default Message;