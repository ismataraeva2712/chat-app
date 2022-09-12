
import react from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';
import { auth } from './components/firebase';
import Navbar from './components/Navbar';
function App() {
  const [user]=useAuthState(auth)
  return (
   <div className='max-w-[720px] mx-auto text-center'>
<section className='flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'>
<Navbar></Navbar>
{user?<Chat></Chat>: null}
</section>
   </div>

  
  );
}

export default App;
