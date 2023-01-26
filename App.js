import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminhome';
import UserPortal from './components/userPortail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}  />
          <Route path='/admin-login' element={<AdminLogin/>} />
          <Route path='/user-login' element={<UserLogin/>} />
          <Route path='/admin/*' element={<AdminHome/>} />
          <Route path='/user/*' element={<UserPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
