import { ChatsState, MessageType } from '@/types/Chat';
import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Configuration, OpenAIApi } from 'openai';

const initialState: ChatsState = {
  chats: [{
    date: 'Mon Jul 24 2023 00:23:35 GMT-0400 (hora de Venezuela)',
    id: 1,
    messages: [{
      props:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      user:"Ana Clara",
      date:"Mon Jul 24 2023 00:24:22 GMT-0400 (hora de Venezuela)",
    },{
      props:"You exceeded your current quota, please check your plan and billing details.",
      user:"OdamaChat",
      date:"Mon Jul 24 2023 00:24:22 GMT-0400 (hora de Venezuela)",
    }]
  }],
  chatSelected: {
    date: new Date().toString(),
    id: 0,
    messages: []
  }
};

const chats = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    createNewChat: (state) => {
      state.chatSelected = {
        date: new Date().toString(),
        id: state.chatSelected.id = state.chats.length + 2,
        messages: []
      }
    },
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.chatSelected.messages = [...state.chatSelected.messages, action.payload];
      state.chats = [...state.chats.filter(chat => chat.id !== state.chatSelected.id), state.chatSelected];
    },
    selectChat: (state, action: PayloadAction<number>) => {
      state.chatSelected = state.chats.find(chat => chat.id === action.payload) ?? 
      {
        date: '',
        id: 0,
        messages: []
      } ;
    },
    deleteChat: (state, action: PayloadAction<number>) => {
      state.chats = state.chats.filter(chat => chat.id !== action.payload);
    },
  },
});

const configuracion = new Configuration({
  apiKey: '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',
}); 

const openai = new OpenAIApi(configuracion);

const  generarInmediatamente = (texto: string) => {
  return `Summarize this ${texto}. and break them into seperate lines`; 
} 

export const sendMessage = (message: string, user: string,  actionComplete: (info:MessageType) => void) => {
    openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: generarInmediatamente(message),
      temperature: 0.6, 
      max_tokens: 1000,
    })
    .then((res: {data : any, status: number}) => {
      if(res.status === 200) {
        actionComplete({props: res.data.message, user: "OdamaChat", date: new Date().toString()});
      }
    })
    .catch((err: any) => {
      actionComplete({props: err.response.data.error.message, user: "OdamaChat", date: new Date().toString()});

    });
    return {
      type: 'SEND_MESSAGE',
      payload: { message, user },
    };
}


export default chats;