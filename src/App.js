import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './firstpage/signup';
import Login from './firstpage/login';
import Navbar from './home/navbar';
import Admin from './home/admin';
import Etudiant from './home/etudiant';
import Trainer from './home/trainer';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='/home' element={<Navbar />}>
          <Route path='admin' element={<Admin />}/>
          <Route path='etudiant' element={<Etudiant />}/>
          <Route path='trainer' element={<Trainer />}/>
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
