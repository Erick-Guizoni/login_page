import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/container/header/Header';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home'
import FormCardPage from './pages/form_card/FormCardPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/formCard' element={<FormCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
