import { useParams } from "react-router-dom";
import SidebarMusic from "../Componentes/SidebarMusic";
import SidebarContainer from "../Componentes/SidebarContainer";
import PiePagina from "../Componentes/PiePagina";
import Portada from "../Componentes/Portada";
import Informacion from "../Componentes/Informacion";
import { artistas } from "../Hooks/artistasData";
import { canciones } from "../Hooks/cancionesData";
import EncabezadoMusic from '../Componentes/EncabezadoMusic';
import MusicBuscador from '../Componentes/MusicBuscador';
import BarraReproduccion from '../Componentes/BarraReproduccion';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../Paginas/Artista.module.css';

function Descripcion({ tipo }: { tipo: "artista" | "cancion" }) {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const data = tipo === "artista"
    ? artistas.find(a => a.id === nombre)
    : canciones.find(c => c.id === nombre);

  if (!data) return <div>No se encontró la información.</div>;

  const [cancionActual, setCancionActual] = useState<{
    titulo: string;
    audioUrl: string;
  } | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');
  searchTerm //No me deja eliminar esta linea y no se porqué
  
  const cancionesLista = [
    {
      titulo: "The Incident - Porcupine Tree",
      audioUrl: "/Musica/porcupine_tree__the_incident.mp3",
      arte: "https://m.media-amazon.com/images/I/41kBPpqJbiL._SX300_SY300_QL70_FMwebp_.jpg",
      año: "2009",
    },
    {
      titulo: "Sex Tape - Deftones",
      audioUrl: "/Musica/Sextape.mp3",
      arte: "https://images.squarespace-cdn.com/content/v1/5147d98fe4b0e61bb0ab60ec/1363845787383-JGAGB2GKWBGOEL08VMHZ/Deftones+DE+Cover+300+rgb.jpg?format=1500w",
      año: "2000",
    },
    {
      titulo: "Parabola - Tool",
      audioUrl: "/Musica/Parabola.mp3",
      arte: "https://lastfm.freetls.fastly.net/i/u/770x0/ec676167abeb99f85d6fee875d55251e.jpg",
      año: "2001",
    },
    {
      titulo: "Birds of feather - Billie Eilish",
      audioUrl: "/Musica/BIRDS OF A FEATHER.mp3",
      arte: "https://cdn-images.dzcdn.net/images/cover/5d284b31cb9ddeb1a0c79aede5a94e1c/500x500-000000-80-0-0.jpg",
      año: "2024",
    },
    {
      titulo: "Digital Bath - Deftones",
      audioUrl: "/Musica/DigitalBath.mp3",
      arte: "https://cdn-images.dzcdn.net/images/cover/c2942294fe29f749ca9ed2d1b25bb247/500x500-000000-80-0-0.jpg",
      año: "2021",
    },
    {
      titulo: "El último de todos - Anomia",
      audioUrl: "/Musica/el_ultimo_de_todos.mp3",
      arte: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEpwOoCFlWPXaGrK3rScKMyLeVezt0HEVdUJ1NPZyfPsfkaJU1O6hfD3DgDpfilDqmPc&usqp=CAU",
      año: "2022",
    },
  ];


  return (
    <div className="Pagina">
    <EncabezadoMusic
      Logo="/logo.png"
      LogoHome="/home.png"
      inicioSesion="Iniciar Sesion"
      Login="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es"
      variant="artista"
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
        ].map((img, index) => (
          <SidebarMusic 
          key={index} 
          Lista={`/${img}`} 
          />
      ))}
      </SidebarContainer>
        <main className="Contenido">
          <Portada imagen={data.imagen}></Portada>
          <Informacion texto={data.descripcion}/> 
          <button className={styles.botonVolver} onClick={() => navigate(-1)}>Volver</button>              

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
            listaCanciones={cancionesLista}
          />

        </main>
      </div>
      <PiePagina
        Logo="/logo.png"
        Texto="© AntiCopyright ningún derecho reservado"
        Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
      />
    </div>
  );
}

export default Descripcion;
