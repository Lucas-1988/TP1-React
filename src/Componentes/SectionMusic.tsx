import { useState } from 'react';
import styles from './SectionMusic.module.css';
import heartGray from '/Corazon_unlike.png';
import heartGreen from '/Corazon_like.png';

type SectionMusic = {
  Titulo: string;
  Arte: string;
  Año: string;
  onPlay?: () => void;  
};

function SectionMusic(props: SectionMusic) {
  const { Titulo, Arte, Año, onPlay} = props;
  const [liked, setLiked] = useState(false);  

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setLiked(!liked);
  };

return (
    <section className={styles.Contenedor} onClick={onPlay}>
      {Arte && (
        <img 
          src={Arte} 
          alt={Titulo} 
          className={styles.Arte}        
        />
      )}
      <h2 className={styles.Cancion}>{Titulo}</h2>
      <h5 className={styles.Año}>Año de lanzamiento: {Año}</h5>
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

export default SectionMusic;

