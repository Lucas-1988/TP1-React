import styles from './SectionMusicArtistas.module.css';
import { Link } from 'react-router-dom';

type SectionMusicArtistasProps = {
  Titulo: string;
  Artista: string;
  Likes?: number;
};

function SectionMusicArtistas(props: SectionMusicArtistasProps) {
  const { Titulo, Artista, Likes } = props;

  return (
    <section className={styles.Contenedor}>
      {Artista && (
        <img
          src={Artista}
          alt={Titulo}
          className={styles.Artista}
        />
      )}
      <h2 className={styles.Titulo}>
        <Link to={`/Artista/${encodeURIComponent(Titulo)}`} className={styles.TituloLink}>
          {Titulo}
        </Link>
      </h2>
      {Likes !== undefined && (
        <h5 className={styles.Reproducciones}>
          {Likes} mil Reproducciones
        </h5>
      )}
    </section>
  );
}

export default SectionMusicArtistas;


