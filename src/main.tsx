import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './index.css';

import Home from './Paginas/Home.tsx';
import Cancion from './Paginas/Cancion.tsx';
import Playlist from './Paginas/Playlist.tsx';
import Artista from './Paginas/Artista.tsx';
import ArtistaDetalle from './Paginas/ArtistaDetalle.tsx';
import Generos from './Paginas/Generos.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Playlist" element={<Playlist />} />
        <Route path="/Cancion/:id" element={<Cancion />} />
        <Route path="/Artista" element={<Artista />} />
        <Route path="/Artista/:id" element={<ArtistaDetalle />} />
        <Route path="/Generos" element={<Generos />} />
        <Route path="*" element={<h4>Error: Pagina no encontrada</h4>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


