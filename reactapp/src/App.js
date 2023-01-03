import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './companents/Header';
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import Register from '../src/companents/Register';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://www.mecallapi.com/api/users ')
      setUsers(response.data)
    }
    getUsers();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users userList={users} />} />
          <Route path='/admin' element={<Register/>} />
       

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;