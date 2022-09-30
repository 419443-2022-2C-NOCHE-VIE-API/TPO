import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/LoginPage";
import SignUp from "./pages/signin/SigninPage";
import Signin01 from "./pages/signin/Signin01";
import SigninTeacher from "./pages/signin/SigninTeacher";
import SigninStudent from "./pages/signin/SigninStudent";
import ClasesAlumnos from "./pages/ClasesAlumnos";
import Coments from "./pages/Comentarios";
import Clases from "./pages/Clases";
import CajaCrearClases from "./pages/CrearClase";
// import Landing from "./pages/landing/Landing";
import olvidoContrasena from "./pages/olvidoContrasena/olvidoContrasena";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              ClasesParticulares.com
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Iniciar Sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in-inicial"}>
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-in-inicial" element={<Signin01 />} />
          <Route path="/signinTeacher" element={<SigninTeacher />} />
          <Route path="/signinStudent" element={<SigninStudent />} />
          <Route path="/homeStudentPage" element={<homeStudentPage />} />
          <Route path="/clasesAlumnos" element={<ClasesAlumnos />} />
          <Route path="/comentarios" element={<Coments />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/crearClase" element={<CajaCrearClases />} />
          <Route path="/homeTeacherPage" element={<homeTeacherPage />} />
          <Route path="/olvidoContrasena" element={<olvidoContrasena />} />
        </Routes>
      </div>
    </Router>
  );
}
