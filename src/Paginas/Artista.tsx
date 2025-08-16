import '../Paginas/Home.css';
import { useEffect, useState } from 'react';
import SectionMusicContainer from '../Componentes/SectionMusicContainer';
import EncabezadoMusic from '../Componentes/EncabezadoMusic';
import SidebarMusic from '../Componentes/SidebarMusic';
import SidebarContainer from '../Componentes/SidebarContainer';
import SectionMusicArtistas from '../Componentes/SectionMusicArtistas';
import MusicBuscador from '../Componentes/MusicBuscador';
import BarraReproduccion from '../Componentes/BarraReproduccion';
import PiePagina from '../Componentes/PiePagina';
import { useNavigate } from "react-router-dom";
import styles from '../Paginas/Artista.module.css';
import { artistasService } from '../assets/Musica/serviceArtistas.js';

type Artista = {
  nombre: string;
  imagen: string;
  likes: number;  
  categoria: string;
};

type Cancion = {
  titulo: string;
  audioUrl: string;  
};

function Artista() {
  const [artistas, setArtistas] = useState<Artista[]>([]);
  const [artistasMasEscuchados, setArtistasMasEscuchados] = useState<Artista[]>([]);
  const [artistasOdiados, setArtistasOdiados] = useState<Artista[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [cancionActual, setCancionActual] = useState<Cancion | null>(null);
  const favoritos = artistas;
  const masEscuchados = artistasMasEscuchados;
  const odiados = artistasOdiados;


  useEffect(() => {
    setLoading(true);
    Promise.all([
      artistasService.getByCategoria('favoritos'),
      artistasService.getByCategoria('mas_escuchado'),
      artistasService.getByCategoria('odiado'),
    ])
      .then(([favoritos, masEscuchados, odiados]) => {
        setArtistas(favoritos);
        setArtistasMasEscuchados(masEscuchados);
        setArtistasOdiados(odiados);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  const favoritosFiltrados = searchTerm
    ? favoritos.filter(artista =>
        artista.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : favoritos;

  const masEscuchadosFiltrados = searchTerm
    ? masEscuchados.filter(artista =>
        artista.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : masEscuchados;

  const odiadosFiltrados = searchTerm
    ? odiados.filter(artista =>
        artista.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : odiados;

  return (
    <>
      {loading ? (
        <div className={styles.loadingMessage}>Cargando Artistas...</div>
      ) : (
        <>
          {error && <div className={styles.errorMessage}>Error: {error}</div>}
          <div className="Pagina">
            <button className={styles.botonVolver} onClick={() => navigate(-1)}>
              Volver
            </button>
            <EncabezadoMusic
              Logo="/logo.png"
              LogoHome="/home.png"
              inicioSesion="Iniciar Sesión"
              Login="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es"
            >
              <MusicBuscador
                placeholder="Buscar canciones, artistas y álbumes"
                onSearch={setSearchTerm}
              />
            </EncabezadoMusic>

            <div className="Layout">
              <SidebarContainer
                Biblioteca="/Biblioteca2.png"
                Playlist="/Playlist2.png"
              >
                <SidebarMusic Lista="/tus_me_gusta.png" />
                <SidebarMusic Lista="/tus episodios.png" />
                <SidebarMusic Lista="/The Emptiness Machine.png" />
                <SidebarMusic Lista="/ramen_para_dos.png" />
                <SidebarMusic Lista="/red_hot.png" />
                <SidebarMusic Lista="/gojira.png" />
                <SidebarMusic Lista="/play_list.png" />
                <SidebarMusic Lista="/nirvana.png" />
                <SidebarMusic Lista="/gorillaz.png" />
              </SidebarContainer>

              <main className="Contenido">
                <section>
                  <SectionMusicContainer Titulo="Tus Artistas Favoritos">
                    {favoritosFiltrados.map((artista, index) => (
                      <SectionMusicArtistas
                        key={index}
                        Titulo={artista.nombre}
                        Artista={artista.imagen}
                        Likes={artista.likes}
                      />
                    ))}
                  </SectionMusicContainer>
                  <SectionMusicContainer Titulo="Los mas escuchados">
                    {masEscuchadosFiltrados.map((artista, index) => (
                      <SectionMusicArtistas
                        key={index}
                        Titulo={artista.nombre}
                        Artista={artista.imagen}
                        Likes={artista.likes}
                      />
                    ))}
                  </SectionMusicContainer>
                  <SectionMusicContainer Titulo="Los mas odiados">
                    {odiadosFiltrados.map((artista, index) => (
                      <SectionMusicArtistas
                        key={index}
                        Titulo={artista.nombre}
                        Artista={artista.imagen}
                        Likes={artista.likes}
                      />
                    ))}
                  </SectionMusicContainer>
                </section>

                <BarraReproduccion
                  BotonAleatorio="/Aleatorio.png"
                  BotonPlay="/Play.png"
                  BotonSiguiente="/Siguiente.png"
                  BotonAnterior="/Anterior.png"
                  BotonRepetir="/Repetir.png"
                  cancionActual={cancionActual}
                  setCancionActual={setCancionActual}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  listaCanciones={[]}
                />
              </main>
            </div>

            <PiePagina
              Logo="/logo.png"
              Texto="© AntiCopyright ningún derecho reservado"
              Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Artista;
