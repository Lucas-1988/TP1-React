import { useEffect, useRef, useState } from 'react';
import styles from './BarraReproduccion.module.css';

type BarraReproduccion = {
  BotonPlay: string;
  BotonSiguiente: string;
  BotonAnterior: string;
  BotonAleatorio: string;
  BotonRepetir: string;
};

function BarraReproduccion(props: BarraReproduccion) {
  const { BotonPlay, BotonSiguiente, BotonAnterior, BotonAleatorio, BotonRepetir } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); 
  const duration = 180; 
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  

  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev < duration) return prev + 1;
          else {
            clearInterval(intervalRef.current!);
            setIsPlaying(false);
            return prev;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isPlaying]);

  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
    };
  const handleSeek = (nuevoTiempo: number) => {setCurrentTime(nuevoTiempo);};

  return (
    <section className={styles.Contenedor}>
      <div className={styles.Controles}>
        <img src={BotonAleatorio} alt="Aleatorio" className={styles.BotonAleatorio} />
        <img src={BotonAnterior} alt="Anterior" className={styles.BotonAnterior} />
        <img
          src={isPlaying ? '/Pausa.png' : BotonPlay}
          alt={isPlaying ? 'Pausa' : 'Play'}
          className={styles.BotonPlay}
          onClick={togglePlay}
        />
        <img src={BotonSiguiente} alt="Siguiente" className={styles.BotonSiguiente} />
        <img src={BotonRepetir} alt="Repetir" className={styles.BotonRepetir} />
      </div>

      <div className={styles.ContenedorInferior}>
        <span className={styles.Tiempo}>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => handleSeek(Number(e.target.value))}
          className={styles.BarraProgreso}
        />
        <span className={styles.Tiempo}>{formatTime(duration)}</span>

        <div className={styles.ContenedorVolumen}>
          <img src="/Volumen.png" alt="Volumen" width={12} height={12} />
          <input type="range" min="0" max="100" className={styles.BarraVolumen} />
        </div>
      </div>
    </section>
  );
}

export default BarraReproduccion;
