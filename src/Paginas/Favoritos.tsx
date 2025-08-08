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

type Cancion = {
  Orden: string;
  titulo: string;
  audioUrl: string;
  arte: string;
  año: string;
  Album: string;
  Duracion: string;
};

function Favoritos() {

  const [canciones, setCanciones] = useState<Cancion[]>(cancionesLista());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cancionActual, setCancionActual] = useState<{ titulo: string; audioUrl: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');  
  const [mostrarFormulario, setMostrarFormulario] = useState(false);  
  const [tituloNueva, setTituloNueva] = useState('');
  const [audioUrlNueva, setAudioUrlNueva] = useState('');
  const [arteNueva, setArteNueva] = useState('');
  const [anioNuevo, setAnioNuevo] = useState('');
  const [albumNuevo, setAlbumNuevo] = useState('');
  const [duracionNueva, setDuracionNueva] = useState('');
  const filteredCanciones = searchTerm 
    ? canciones.filter(cancion =>
        cancion.titulo.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : canciones;

  useEffect(() => {
    setLoading(true);    
    const timer = setTimeout(() => {
      musicService.getAllSongs()
        .then((data: Cancion[]) => {
          setCanciones(data);
          setError(null);
        })
        .catch((err: any) => setError(err.message))
        .finally(() => setLoading(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const agregarCancion = () => {
    if (!tituloNueva || !audioUrlNueva) {
      alert('Por favor, ingresa al menos título y URL de audio.');
      return;
    }

    const ultimoOrden = canciones.length > 0 
      ? Math.max(...canciones.map(c => Number(c.Orden))) 
      : 0;
    const nuevoOrden = (ultimoOrden + 1).toString();

    const nuevaCancion = {
      Orden: nuevoOrden,
      titulo: tituloNueva,
      audioUrl: audioUrlNueva,
      arte: arteNueva,
      año: anioNuevo,
      Album: albumNuevo,
      Duracion: duracionNueva,
    };

    setCanciones([...canciones, nuevaCancion]);    
    setTituloNueva('');
    setAudioUrlNueva('');
    setArteNueva('');
    setAnioNuevo('');
    setAlbumNuevo('');
    setDuracionNueva('');
    setMostrarFormulario(false); 
  };

  const eliminarCancion = (orden: number) => {
    const confirmar = window.confirm('¿Estás seguro que quieres eliminar esta canción?');
    if (!confirmar) return;

    setCanciones(canciones.filter(c => Number(c.Orden) !== orden));
  };

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
                  <div className={styles.listadoCanciones}>
                    {filteredCanciones.map((cancion) => (
                      <CancionDetalle
                        key={cancion.Orden} className={styles.filaCancion}
                        Orden={String(cancion.Orden)}
                        Titulo={cancion.titulo}
                        Arte={cancion.arte || 'https://images.icon-icons.com/1736/PNG/512/4043278-avatar-male-ozzy-rock-singer_113287.png'}
                        Año={cancion.año}
                        Album={cancion.Album}
                        Duracion={cancion.Duracion}
                        onPlay={() => {
                          setCancionActual(cancion);
                          setIsPlaying(true);
                        }}
                        onDelete={() => eliminarCancion(Number(cancion.Orden))}
                      />
                    ))}
                  </div>
                </CancionDetalleContainer>

                {!mostrarFormulario && (
                  <button
                    onClick={() => setMostrarFormulario(true)}
                    className={styles.botonAgregar}
                  >
                    Agregar canción
                  </button>
                )}
                
                {mostrarFormulario && (
                  <div className={styles.modalOverlay} onClick={() => setMostrarFormulario(false)}>
                    <section className={styles.modalContent} onClick={e => e.stopPropagation()}>
                      <h3>Agregar nueva canción</h3>
                      <input
                        type="text"
                        placeholder="Título"
                        value={tituloNueva}
                        onChange={(e) => setTituloNueva(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="URL de audio"
                        value={audioUrlNueva}
                        onChange={(e) => setAudioUrlNueva(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Arte (URL imagen)"
                        value={arteNueva}
                        onChange={(e) => setArteNueva(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Año"
                        value={anioNuevo}
                        onChange={(e) => setAnioNuevo(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Álbum"
                        value={albumNuevo}
                        onChange={(e) => setAlbumNuevo(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Duración"
                        value={duracionNueva}
                        onChange={(e) => setDuracionNueva(e.target.value)}
                      />
                                           
                      <div className={styles.modalContent}>
                        <div className={styles.botonesformulario}>
                          <button className={styles.botonform} onClick={agregarCancion}>Agregar Canción</button>
                          <button className={styles.botonform} onClick={() => setMostrarFormulario(false)}>Cancelar</button>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

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


