import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/container/header/Header';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home'
import FormCardPage from './pages/form_card/FormCardPage';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={
        <PrivateRoute> 
        <Home/>
        </PrivateRoute> 
      }/>
      <Route path='/formCard' element={<FormCardPage />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
