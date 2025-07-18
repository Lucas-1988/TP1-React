import styles from './EncabezadoMusic.module.css';
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type EncabezadoMusicProps = {
  Logo: string;
  LogoHome: string;
  inicioSesion: string;
  Login: string;
  children: ReactNode;
  variant?: 'default' | 'artista'; 
};

function EncabezadoMusic({ Logo, LogoHome, inicioSesion, Login, children, variant = 'default' }: EncabezadoMusicProps) {
  return (
    <section
      className={`${styles.Encabezado} ${variant === 'artista' ? styles.EncabezadoArtista : ''}`}
    >
      <img src={Logo} alt="Logo" className={styles.Logo} />
      <Link to="/">
        <img src={LogoHome} alt="LogoHome" className={styles.LogoHome} />
      </Link>
      <div className={`${styles.MusicBuscador} ${variant === 'artista' ? styles.MusicBuscadorEncabezado : ''}`}>{children}</div>
      <a href={Login} className={styles.inicioSesion} target="_blank" rel="noopener noreferrer">
        {inicioSesion}
      </a>
    </section>
  );
}

export default EncabezadoMusic;
