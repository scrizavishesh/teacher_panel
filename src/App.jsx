import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout2 from './Dashboard/MainLayout2';
// import MainLayout from './Dashboard/MainLayout';
import Login from './Pages/Login';

function App() {

  const token = localStorage.getItem('token');
  return (
    <>
  {token 
        ? 
          <BrowserRouter>
            <MainLayout2 />
          </BrowserRouter>
        :
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        }
      {/* <BrowserRouter>
        <MainLayout2 />
     
      </BrowserRouter> */}
    </>
  );
}

export default App;