
import react, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';
import { auth } from './components/firebase';
import Navbar from './components/Navbar';
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Homes from './components/Homes';
import SignIn from './components/SignIn';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';

// ..
AOS.init();
function App() {
  const [user]=useAuthState(auth)
 
  return (
   <div className=' mx-auto text-center'>
<section className='flex flex-col max-h-screen bg-gray-100  shadow-xl border relative '>
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Homes></Homes>}></Route>
  <Route path='/chat' element={<RequireAuth><Chat></Chat></RequireAuth>}></Route>
  <Route path='/signin' element={<SignIn></SignIn>}></Route>
  <Route path='/signup' element={<Register></Register>}></Route>
  
  
</Routes>
{/* {user?<Chat></Chat>: null} */}

</section>

   </div>

  
  );
}

export default App;
