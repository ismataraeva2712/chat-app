import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const LogOut = () => {
    const logout = () => {
        signOut(auth);
      };
    return (
        
        <div>
           <button  onClick={logout} className='bg-gray-200 px-4 py-2 hover:bg-gray-100'>
        Logout
    </button>
        </div>
    );
};

export default LogOut;