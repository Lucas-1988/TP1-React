import { useState } from 'react';
import styles from './MusicBuscador.module.css';

type MusicBuscadorProps = {
  placeholder?: string;
}

function MusicBuscador({ placeholder }: MusicBuscadorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.MusicBuscador}>
      <div 
        className={`${styles.Container} ${isExpanded ? styles['Container--expanded'] : ''}`}
      >
        <img src="/Lupita.png" alt="Buscar" className={styles.Lupa} />
        <input
          type="text"
          className={styles.Input}
          placeholder={placeholder}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
        />
      </div>
    </section>
  );
}

export default MusicBuscador;