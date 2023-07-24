export interface MessageType {
  props: string;
  date: string;
  user: string
}

export interface ChatType {
  messages: MessageType[];
  date: string;
  id: number;
}


export interface ChatsState {
  chats: ChatType[];
  chatSelected: ChatType;
}