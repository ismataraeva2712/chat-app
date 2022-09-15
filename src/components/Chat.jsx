import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Message from './Message';

import { db } from './firebase';
import SendMessage from './SendMessage';
const Chat = () => {
  const[messages, setMessages]=useState([])
    const scroll = useRef()
    useEffect(()=>{
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    },[])
    useEffect(()=>{
      var objDiv = document.getElementById("parentDiv");
  objDiv.scrollTop = objDiv.scrollHeight;
    },[messages])
    return (
        <>
        <main id='parentDiv' className='flex flex-col p-[10px] relative  overflow-auto mb-12'>
          {messages && messages.map((message)=>(
            <Message key=
            {message.id}
            message={message}
            ></Message>
          ))}
      
        </main>
        <SendMessage scroll={scroll}></SendMessage>
        <span ref={scroll}></span>

        </>
    );
};

export default Chat;