import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import { auth } from './firebase';


const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='flex justify-center'>
            <GoogleButton  onClick={() => signInWithGoogle()}></GoogleButton>
        </div>
    );
};

export default SignIn;