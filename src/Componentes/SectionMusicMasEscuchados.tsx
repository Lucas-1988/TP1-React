import { useState } from 'react';
import styles from './SectionMusicMasEscuchados.module.css';
import heartGray from '/Corazon_unlike.png';
import heartGreen from '/Corazon_like.png';

type SectionMusicMasEscuchados = {
  Imagen: string; 
  Cancion: string;
  Autor: string;
  Año: string
  Likes?: number;  
}

function SectionMusicMasEscuchados(props: SectionMusicMasEscuchados) {
  const { Imagen, Cancion, Autor, Año } = props;
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <section className={styles.Contenedor}>
      <img src={Imagen} alt={Imagen} className={styles.Imagen} />
      <h1 className={styles.Cancion}>{Cancion}</h1>
      <h2 className={styles.Autor}>{Autor}</h2>
      <h2 className={styles.Año}>{Año}</h2>
      <button className={styles.Likes} onClick={toggleLike}>
        <img 
          src={liked ? heartGreen : heartGray} 
          alt="Me gusta" 
          className={`${styles.HeartIcon} ${!liked ? styles.GrayShadow : ''}`}
        />
      </button>
    </section>
  );
}

export default SectionMusicMasEscuchados;
