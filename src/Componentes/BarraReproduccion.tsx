import { useEffect, useRef, useState } from 'react';
import styles from './BarraReproduccion.module.css';

type Cancion = {
  titulo: string;
  audioUrl: string;
};

type BarraReproduccionProps = {
  BotonPlay: string;
  BotonSiguiente: string;
  BotonAnterior: string;
  BotonAleatorio: string;
  BotonRepetir: string;
  cancionActual: Cancion | null;
  setCancionActual: React.Dispatch<React.SetStateAction<Cancion | null>>;
  listaCanciones: Cancion[];
  isPlaying: boolean;                       
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>; 
};

function BarraReproduccion({
  BotonPlay,
  BotonSiguiente,
  BotonAnterior,
  BotonAleatorio,
  BotonRepetir,
  cancionActual,
  setCancionActual,
  listaCanciones,
  isPlaying,
  setIsPlaying,
}: BarraReproduccionProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !cancionActual?.audioUrl) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error('Error al reproducir:', err));
    } else {
      audio.pause();
    }
  }, [isPlaying, cancionActual]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('timeupdate', updateTime);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const handleSeek = (nuevoTiempo: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = nuevoTiempo;
      setCurrentTime(nuevoTiempo);
    }
  };

  const handleVolumeChange = (nuevoVol: number) => {
    setVolume(nuevoVol);
    if (audioRef.current) {
      audioRef.current.volume = nuevoVol;
    }
  };

  const handleSiguiente = () => {
    if (!cancionActual) return;
    const indexActual = listaCanciones.findIndex(c => c.titulo === cancionActual.titulo);
    const nueva = listaCanciones[(indexActual + 1) % listaCanciones.length];
    setCancionActual(nueva);
    setIsPlaying(true);
  };

  const handleAnterior = () => {
    if (!cancionActual) return;
    const indexActual = listaCanciones.findIndex(c => c.titulo === cancionActual.titulo);
    const nueva = listaCanciones[(indexActual - 1 + listaCanciones.length) % listaCanciones.length];
    setCancionActual(nueva);
    setIsPlaying(true);
  };

  return (
    <section className={styles.Contenedor}>

    <div className={styles.TituloCancion}>
      {cancionActual ? cancionActual.titulo : "No hay canción en reproducción"}
    </div>

      <div className={styles.Controles}>
        <img src={BotonAleatorio} alt="Aleatorio" className={styles.BotonAleatorio} />
        <img
          src={BotonAnterior}
          alt="Anterior"
          className={styles.BotonAnterior}
          onClick={handleAnterior}
        />
        <img
          src={isPlaying ? `${import.meta.env.BASE_URL}Pausa.png` : BotonPlay}
          alt={isPlaying ? 'Pausa' : 'Play'}
          className={styles.BotonPlay}
          onClick={() => setIsPlaying(!isPlaying)}
        />
        <img
          src={BotonSiguiente}
          alt="Siguiente"
          className={styles.BotonSiguiente}
          onClick={handleSiguiente}
        />
        <img src={BotonRepetir} alt="Repetir" className={styles.BotonRepetir} />
      </div>

      <div className={styles.ContenedorInferior}>
        <span className={styles.Tiempo}>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={audioRef.current?.duration || 0}
          value={currentTime}
          onChange={(e) => handleSeek(Number(e.target.value))}
          className={styles.BarraProgreso}
          style={{
            background: `linear-gradient(to right, #1ED760 0%, #1ED760 ${(currentTime / (audioRef.current?.duration || 1)) * 100}%, rgba(255,255,255,0.2) ${(currentTime / (audioRef.current?.duration || 1)) * 100}%, rgba(255,255,255,0.2) 100%)`
          }}
        />
        <span className={styles.Tiempo}>
          {formatTime(audioRef.current?.duration || 0)}          
        </span>

        <div className={styles.ContenedorVolumen}>
          <img src={`${import.meta.env.BASE_URL}Volumen.png`} alt="Volumen" width={12} height={12} />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className={styles.BarraVolumen}
              style={{
            background: `linear-gradient(to right, #1ED760 0%, #1ED760 ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
            }}
          />
        </div>
      </div>

      <audio ref={audioRef} src={cancionActual?.audioUrl || ''} />
    </section>
  );
}

export default BarraReproduccion;
