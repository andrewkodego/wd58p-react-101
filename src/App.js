import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login';
import Settings from './Settings';
import Error404 from './Error404';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path="contact-us" element={<ContactUs />}/>
          <Route path="settings" element={<Settings />}/>
          <Route path="*" element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
