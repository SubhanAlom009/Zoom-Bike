import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function App() {

  return (
    <>
      <div className="min-vh-100">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
