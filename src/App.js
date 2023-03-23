import {React, Component} from "react";
import "./styles.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClassPhotos from "./pages/classPhotos";
import FunCorner from "./pages/funCorner";
import useLocalStorage from 'use-local-storage'

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classPhotos" element={<ClassPhotos />} />
        <Route path="/funCorner" element={<FunCorner />}/>
      </Routes>
    
  );
}
  

