import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import SectionMusic from './Componentes/SectionMusic.tsx';

const post = createElement (
  SectionMusic,
  { 
    Titulo: 'album',
    Arte: 'tapa del album',
    Año: 'Año de publicación'

  });

  console.log(post);

createRoot(document.getElementById('root')!).render(<App />)



