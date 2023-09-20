import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginView from './componentes/loginview';
import DashboardView from './componentes/dashboardview'
import Notesview from './componentes/notesview'
//import RegistrarUsuario from './componentes/registerview';
import  NuevaNota  from './componentes/nuevanota';
import Notas from './componentes/notesview';
import RegisterUser from './componentes/registerview';
import NotaEditable from './componentes/notaEstiloEditable';
import EditProfile from './componentes/editProfile'
import EditEmailPassword from './componentes/editEmailPassword';
import SubirArchivo from './componentes/upload'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    {/* cada componente route indica la ruta */}
    <Route path="/" element={<App />} />
      <Route path="login" element={<LoginView />} />
      {/* <Route path="dashboard/:uid" element={<DashboardView />} /> */}
      <Route path="dashboard" element={<DashboardView />} />
        {/* <Route path="dashboard/profile" element={<SubirArchivo />}/> */}

      <Route path="dashboard/profile" element={<EditProfile />}/>
      <Route path="dashboard/changeLogin" element={<EditEmailPassword />}/>
      {/* <Route path="chooseColor" element={<NotaEditable />} /> */}
    
      <Route path="notes/:uid" element={<Notesview />} />

      <Route path="newnotes" element={<NuevaNota />} />
      <Route path="notesview" element={<Notas />} />
      <Route path="registerview" element={<RegisterUser />} />
      {/* <Route path="register" element={<RegistrarUsuario />} /> */}
      {/* ruta dinamica, porque voy a esperar nombre de usuario */}
      {/* <Route path="u/:username" element={<Profile />} /> */}
      {/* despues de loguearnos escogemos nombre de usuario */}
      {/* <Route path="choose-username" element={<UsernameView />} /> */}
  </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
