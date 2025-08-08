import { useParams, useNavigate } from "react-router-dom";
import SidebarMusic from "../Componentes/SidebarMusic";
import SidebarContainer from "../Componentes/SidebarContainer";
import PiePagina from "../Componentes/PiePagina";
import Portada from "../Componentes/Portada";
import Informacion from "../Componentes/Informacion";
import { artistasDB } from "../assets/Musica/Artistas.db.js";
import type { Artista } from "src/assets/Musica/Artistas.db.js";
import EncabezadoMusic from '../Componentes/EncabezadoMusic';
import MusicBuscador from '../Componentes/MusicBuscador';
import styles from '../Paginas/Artista.module.css';


function ArtistaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const artista = artistasDB.find((a: Artista) => a.id === id); 
  if (!artista) return <div>No se encontró la información del artista.</div>;

  return (
    <div className="Pagina">
      <EncabezadoMusic
        Logo="../Public/logo.png"
        LogoHome="../Public/home.png"
        inicioSesion="Iniciar Sesion"
        Login="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es"
        variant="artista"
      >
        <MusicBuscador
          placeholder="Buscar canciones, artistas y álbumes"
          onSearch={() => {}}
        />
      </EncabezadoMusic>

      <div className="Layout">
        <SidebarContainer
          Biblioteca="/Public/Biblioteca2.png"
          Playlist="/Public/Playlist2.png"
        >
          {[
            "tus_me_gusta.png",
            "tus episodios.png",
            "The Emptiness Machine.png",
            "ramen_para_dos.png",
            "red_hot.png",
          ].map((img, index) => (
            <SidebarMusic
              key={index}
              Lista={`/Public/${img}`}
            />
          ))}
        </SidebarContainer>
        <main className="Contenido">
          <Portada imagen={artista.imagen} />
          <Informacion texto={artista.descripcion} />
          <button className={styles.botonVolver} onClick={() => navigate(-1)}>
            Volver
          </button>
        </main>
      </div>
      <PiePagina
        Logo="/Public/logo.png"
        Texto="© AntiCopyright ningún derecho reservado"
        Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
      />
    </div>
  );
}

export default ArtistaDetalle;