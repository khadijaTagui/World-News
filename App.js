// Importation de React et des styles pour le composant principal
import React from 'react';
import './App.css';

// Importation des composants et des utilitaires de react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/ContactUs';
import NewsBoard from './components/NewsBoard';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm'; // Ajustez le chemin selon votre structure de fichiers

// Importation du hook useState de React
import { useState } from "react";
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';

// Définition du composant principal App
function App() {
  // État local pour gérer la catégorie sélectionnée
  const [category, setCategory] = useState("general");

  return (
    <>
      {/* Configuration du routeur BrowserRouter */}
      <BrowserRouter>
        {/* Composant Navbar avec la fonction de mise à jour de la catégorie */}
        <Navbar setCategory={setCategory} />
        
        {/* Commenté: Composant NewsBoard avec la catégorie comme propriété */}
        {/* <NewsBoard category={category} /> */}

        {/* Configuration des routes avec le composant Routes */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path='/Home' element={<Home />} />

          
          {/* <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>} /> */}
          <Route path="/forgot-password" component={<ForgotPassword/>} />

          {/* Routes pour d'autres pages */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          {/* Correction du chemin de la route vers '/category/:category' */}
          <Route path='/category/:category' element={<NewsBoard />} />
          <Route path="/" exact component={NewsBoard} />
          {/* <Route path='/Home' element={<NewsBoard />} /> */}

          <Route path='/login' element={<Login />} />
          <Route path='/SignUpForm' element={<SignUpForm />} />
        </Routes>

        {/* Composant Footer  */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

// Exportation du composant principal App
export default App;