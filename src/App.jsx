import { useContext, useState } from 'react'
import UserForm from './components/UserForm'
import Navbar from './components/Navbar'
import ShowUsers from './components/ShowUsers'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import FormContext from './UseContext'





function App() {
  let [userData, setUserData] = useState([]);
  let data = {
    userData: userData,
    setUserData: setUserData
  };

  return (
    <>
      {/* setting routes */}
      <FormContext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<UserForm />} />
            <Route path="/users" element={<ShowUsers />} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </>
  );
}

export default App;
