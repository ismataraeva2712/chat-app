import { async } from '@firebase/util';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { auth, db } from './firebase';


const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault()
        if(input === ''){
            alert('please enter a valid message')
            return
        }
        const{uid,displayName}=auth.currentUser
        await addDoc(collection(db,'messages'),{
            text:input,
            name:displayName,
            uid,
            timestamp:serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior:'smooth'})
    }
    return (
        <form onSubmit={sendMessage} className='h-14 w-full   flex text-xl absolute bottom-0'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none' type="text" placeholder='Message' />
            <button className='w-[20%] bg-primary text-white' type="submit">Send</button>
        </form>
    );
};

export default SendMessage;