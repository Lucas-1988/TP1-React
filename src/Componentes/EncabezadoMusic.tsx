import styles from './EncabezadoMusic.module.css';
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type EncabezadoMusic = {
  Logo: string;
  LogoHome: string;
  inicioSesion: string;
  Login: string; 
  children: ReactNode;
};

function EncabezadoMusic(props: EncabezadoMusic) {
  const { Logo, LogoHome, inicioSesion, Login, children } = props;

  return (
    <section className={styles.Encabezado}>
      <img src={Logo} alt="Logo" className={styles.Logo} />
      <Link to="/">
        <img src={LogoHome} alt="LogoHome" className={styles.LogoHome} />
      </Link>
      <div className={styles.MusicBuscador}>{children}</div>

      <a href={Login} className={styles.inicioSesion} target="_blank">
        {inicioSesion}
      </a>
    </section>
  );
}

export default EncabezadoMusic;