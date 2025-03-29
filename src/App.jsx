import './App.css'

import { NavLink } from "react-router";
import { BrowserRouter, Route, Routes } from 'react-router'
import UserDetails from './components/UserDetails.jsx'
import Counter from './components/Counter.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink className="app-links" to="/">Counter</NavLink>
        <NavLink className="app-links" to="/userDetails">User Details</NavLink>
        <Routes>
          <Route path="/" element={<Counter/>}></Route>
          <Route path="/userDetails" element={<UserDetails />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
