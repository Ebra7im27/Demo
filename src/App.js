import { Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import Home from './Pages/Home/Home';
import InfoStu from './Pages/InfoStu/InfoStu';
import News from './Pages/news/news';
import RegisterEmail from './Pages/registerEmail/registerEmail';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import PageNotFound from './Pages/PageNotFound/Pagenotfound';
import Subjects from './Pages/Subjects/Subjects';
import ProtectedRoute from './Pages/ProtectRoute'; // security

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/student/info' element={
          <ProtectedRoute>
            <InfoStu />
          </ProtectedRoute>
        } />
        <Route path='/student/registeremail' element={
          <ProtectedRoute>
            <RegisterEmail />
          </ProtectedRoute>
        } />
        <Route path='/student/news' element={
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        } />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="*" element={
          <ProtectedRoute>
            <PageNotFound />
          </ProtectedRoute>
        } />

        <Route path="/student/subjects" element={
          <ProtectedRoute>
            <Subjects />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
