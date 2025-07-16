import { useParams } from 'react-router-dom';
import type { ReactNode } from 'react';
import ThePineappleThief from './ThePineappleThief';


function ArtistaDetalle() {
  const { nombreArtista } = useParams();  
  const componentesArtistas: Record<string, ReactNode> = {
    'The Pineapple Thief': <ThePineappleThief/>,
  };

  const componente = componentesArtistas[nombreArtista || ''];

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      {componente ? (
        componente
      ) : (
        <h2>No se encontró información para esta cancion</h2>
      )}
    </div>
  );
}

export default ArtistaDetalle;
