import React, { useState } from "react";
import Navegacion from "./componentes/Navegacion";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import Contacto from "./componentes/Contacto";

export default function App() {
  return (
    <div className="bg-danger">
      <Navegacion />
      <Header />
      <Main />
      <Contacto />
      <Footer />
    </div>
  );
}