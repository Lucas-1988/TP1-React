import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './index.css';
import ArtistaDetalle from './Paginas/ArtistaDetalle.tsx';
import Home from './Paginas/Home.tsx';
import Artista from './Paginas/Artista.tsx';
import Favoritos from './Paginas/Favoritos.tsx';
import Descripcion from './Paginas/Descripcion.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/artista" element={<Artista />} />
        <Route path="/artista/:nombre" element={<Descripcion tipo="artista" />} /> 
        <Route path="/artista/:nombre" element={<ArtistaDetalle />} />
        <Route path="/cancion/:nombre" element={<Descripcion tipo="cancion" />} />               
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="*" element={<h4>Error: Pagina no encontrada</h4>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);