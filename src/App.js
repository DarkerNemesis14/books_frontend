// import css file
import './App.css';

// import packages
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// import custom hooks
import { useAuthContext } from './hooks/useAuthContext';

// import pages
import Home from './pages/Home'
import Feed from './pages/Feed'
import Login from './pages/Login'

// import components
import NavBar from './components/Navbar';
import Scrollbar from "./components/Scrollbar"
import Error404 from './pages/Error404';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="app">
      <BrowserRouter>
        {user && <Scrollbar />}
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route
              path = "/"
              element = {<Home />}
            />
            <Route
              path = "/login"
              element = {!user? <Login /> : <Navigate to = "/feed"/>}
            />
            <Route
              path = "/feed"
              element = {user? <Feed /> : <Navigate to = "/login"/>}
            />
            <Route
              path = "*"
              element = {<Error404 />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;