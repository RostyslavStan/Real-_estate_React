import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import AddProperty from './pages/AddProperty';
import MyProperties from './pages/MyProperties';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/addproperty' element={<AddProperty />} />
        <Route path='/myproperties' element={<MyProperties />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="*" element={<Navigate to="/myproperties" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
