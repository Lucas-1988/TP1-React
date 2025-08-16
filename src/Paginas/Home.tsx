import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { musicService } from "../assets/Musica/service";
import { artistasDB } from "../assets/Musica/Artistas.db.js";
import EncabezadoMusic from "../Componentes/EncabezadoMusic";
import MusicBuscador from "../Componentes/MusicBuscador";
import SidebarContainer from "../Componentes/SidebarContainer";
import SidebarMusic from "../Componentes/SidebarMusic";
import SectionMusicContainer from "../Componentes/SectionMusicContainer";
import SectionMusic from "../Componentes/SectionMusic";
import SectionMusicArtistas from "../Componentes/SectionMusicArtistas";
import BarraReproduccion from "../Componentes/BarraReproduccion";
import PiePagina from "../Componentes/PiePagina";


type Cancion = {
  id: string;
  titulo: string;
  audioUrl: string;
  arte?: string;
  año?: string;
  artista?: string;
};
function Home() {
  // Datos con React Query
const { data: canciones = [], isLoading, isError, error } = useQuery<Cancion[]>({
  queryKey: ["songs"],
  queryFn: musicService.getAllSongs,
});



  const [cancionActual, setCancionActual] = useState<{ titulo: string; audioUrl: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  // Filtrado de canciones y limitación
  const filteredCanciones = searchTerm
    ? canciones.filter((cancion) =>
        cancion.titulo.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : canciones;

  const cancionesAMostrar = filteredCanciones.slice(0, 6);

  // Filtrado y limitación de artistas
  const filteredArtistas = searchTerm
    ? artistasDB.filter((artista) =>
        artista.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : artistasDB;

  const artistasLimitados = filteredArtistas.slice(0, 6);

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {String(error)}</p>;

  return (
    <>
      <div className="Pagina">
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
            {[
              "tus_me_gusta.png",
              "tus episodios.png", 
              "The Emptiness Machine.png", 
              "ramen_para_dos.png",
              "red_hot.png",
              "gojira.png",
              "play_list.png",
              // "nirvana.png",
              // "gorillaz.png",
            ].map((img, index) => (
              <SidebarMusic key={index} Lista={`/${img}`} />
            ))}
          </SidebarContainer>

          <main className="Contenido">
            {/* Canciones */}
            <section className="seccion-favoritos">
              <div className="encabezado-seccion">
                <h2 className="titulo-seccion">Tus Canciones Favoritas</h2>
                <Link to="/Favoritos" className="link-ver-todo">
                  Ver todas
                </Link>
              </div>

              <SectionMusicContainer Titulo="">
                {cancionesAMostrar.map((cancion, index) => (
                  <div key={index} className="cancion-item">
                    <SectionMusic
                      Titulo={cancion.titulo}
                      Arte={cancion.arte ?? ""}
                      Año={cancion.año ?? ""}
                      onPlay={() => {
                        setCancionActual(cancion);
                        setIsPlaying(true);
                      }}
                    />
                  </div>
                ))}
              </SectionMusicContainer>
            </section>

            
            <section className="seccion-artistas">
              <div className="encabezado-seccion">
                <h2 className="titulo-seccion">Artistas</h2>
                <Link to="/Artista" className="link-ver-todo">
                  Ver todos
                </Link>
              </div>

              <SectionMusicContainer Titulo="">
                {artistasLimitados.map((artista, index) => (
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
              BotonAleatorio="public/Aleatorio.png"
              BotonPlay="../Play.png"
              BotonSiguiente="../Siguiente.png"
              BotonAnterior="../Anterior.png"
              BotonRepetir="../Repetir.png"
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
  );
}

export default Home;


