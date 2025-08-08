import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import './index.css';
import Home from './Paginas/Home';
import Artista from './Paginas/Artista';
import Favoritos from './Paginas/Favoritos';
import ArtistaDetalle from './Paginas/ArtistaDetalle';

const queryClient = new QueryClient(); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artista" element={<Artista />} />
          <Route path="/artista/:id" element={<ArtistaDetalle />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="*" element={<h4>Error: Pagina no encontrada</h4>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);