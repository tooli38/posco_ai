import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import AdminHome from './page/AdminHome';
import Login from './page/Login';
import Signup from './page/Signup';

const App = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(0);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home userName={userName} userId={userId} />}
          ></Route>
          <Route
            path='/admin-home'
            element={<AdminHome userName={userName} userId={userId} />}
          ></Route>
          <Route
            path='/login'
            element={<Login setUserName={setUserName} setUserId={setUserId} />}
          ></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
