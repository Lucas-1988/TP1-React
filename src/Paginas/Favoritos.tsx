import '../Paginas/Home.css';
import { useEffect, useState } from 'react';
import CancionDetalleContainer from '../Componentes/CancionDetalleContainer';
import EncabezadoMusic from '../Componentes/EncabezadoMusic';
import SidebarMusic from '../Componentes/SidebarMusic';
import SidebarContainer from '../Componentes/SidebarContainer';
import CancionDetalle from '../Componentes/CancionDetalle';
import MusicBuscador from '../Componentes/MusicBuscador';
import BarraReproduccion from '../Componentes/BarraReproduccion';
import PiePagina from '../Componentes/PiePagina';
import { useNavigate } from "react-router-dom";
import styles from '../Paginas/Artista.module.css'; 
import { cancionesLista } from '../Hooks/cancionesLista';
import { musicService } from '../assets/Musica/service.js';

function Favoritos() {

  const canciones = cancionesLista();
  const [cancionActual, setCancionActual] = useState<{
    titulo: string;
    audioUrl: string;
  } | null>(null);

  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);    
    const timer = setTimeout(() => {
      musicService.getAllSongs()
        .then(canciones)
        .catch((err: any) => setError(err.message))
        .finally(() => setLoading(false));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  
  const filteredCanciones = searchTerm 
  ? canciones.filter(cancion =>
      cancion.titulo.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
  : canciones;

return (
  <>
    {loading ? (
      <div className={styles.loadingMessage}>Cargando canciones...</div>
    ) : (
      <>
        {error && <div className={styles.errorMessage}>Error: {error}</div>}
        <div className="Pagina">
          <button className={styles.botonVolver} onClick={() => navigate(-1)}>Volver</button>
          <EncabezadoMusic
            Logo="../Public/logo.png"
            LogoHome="../Public/home.png"
            inicioSesion="Iniciar Sesión"
            Login="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es"
            variant="Favoritos"
          >
            <MusicBuscador
              placeholder="Buscar canciones, artistas y álbumes"
              onSearch={setSearchTerm}
            />
          </EncabezadoMusic>

          <div className="Layout">
            <SidebarContainer
              Biblioteca="../Public/Biblioteca2.png"
              Playlist="../Public/Playlist2.png"
            >
              <SidebarMusic Lista="../Public/tus_me_gusta.png" />
              <SidebarMusic Lista="../Public/tus episodios.png" />
              <SidebarMusic Lista="../Public/The Emptiness Machine.png" />
              <SidebarMusic Lista="../Public/ramen_para_dos.png" />
              <SidebarMusic Lista="../Public/red_hot.png" />
            </SidebarContainer>

            <main className="Contenido">
              <div className="encabezado-seccion">
                <h2 className="titulo-seccion">Tus Canciones Favoritas</h2>
              </div>
              <div className={styles.CamposCanciones}>
                <span>Título</span>
                <span>Álbum</span>
                <span>Duración</span>
              </div>
              <CancionDetalleContainer>
                {filteredCanciones.map((cancion) => (
                  <CancionDetalle
                    key={cancion.Orden}
                    Orden={String(cancion.Orden)}
                    Titulo={cancion.titulo}
                    Arte={cancion.arte}
                    Año={cancion.año}
                    Album={cancion.Album}
                    Duracion={cancion.Duracion}
                    onPlay={() => {
                      setCancionActual(cancion);
                      setIsPlaying(true);
                    }}
                  />
                ))}
              </CancionDetalleContainer>

              <BarraReproduccion
                BotonAleatorio="/Public/Aleatorio.png"
                BotonPlay="/Public/Play.png"
                BotonSiguiente="/Public/Siguiente.png"
                BotonAnterior="/Public/Anterior.png"
                BotonRepetir="/Public/Repetir.png"
                cancionActual={cancionActual}
                setCancionActual={setCancionActual}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                listaCanciones={canciones}
              />
            </main>
          </div>

          <PiePagina
            Logo="/Public/logo.png"
            Texto="© AntiCopyright ningún derecho reservado"
            Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
          />
        </div>
      </>
    )}
  </>
);
}

export default Favoritos;

