import { useState } from 'react';
import styles from './MusicBuscador.module.css';

type MusicBuscadorProps = {
  placeholder?: string;
  onSearch: (term: string) => void; 
}

function MusicBuscador({ placeholder, onSearch }: MusicBuscadorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const term = e.target.value;
  setSearchTerm(term);
  onSearch(term); 
};

  return (
    <section className={styles.MusicBuscador}>
      <div 
        className={`${styles.Container} ${isExpanded ? styles['Container--expanded'] : ''}`}
      >
        <img src={`${import.meta.env.BASE_URL}Lupita.png`} alt="Buscar" className={styles.Lupa} />
        <input
          type="text"
          className={styles.Input}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
        />
      </div>
    </section>
  );
}

export default MusicBuscador;