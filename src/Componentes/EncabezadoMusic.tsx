import styles from './EncabezadoMusic.module.css';
import { type ReactNode } from 'react';

type EncabezadoMusic = {
  Logo: string;  
  inicioSesion : string;
  children: ReactNode;
}

function EncabezadoMusic(props:EncabezadoMusic) {
  const {Logo, inicioSesion, children} = props;
  return (
    <section className={styles.Encabezado}>
      <img src={Logo} alt={Logo} className={styles.Logo} />      
      <div className={styles.MusicBuscador}>{children}</div>
      <button className={styles.inicioSesion}>{inicioSesion}</button>
      

    </section>
  );
}
export default EncabezadoMusic;
