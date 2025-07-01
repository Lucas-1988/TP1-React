import './App.css';
import { useState } from 'react';
import SectionMusic from './Componentes/SectionMusic';
import SectionMusicContainer from './Componentes/SectionMusicContainer';
import EncabezadoMusic from './Componentes/EncabezadoMusic';
import SidebarMusic from './Componentes/SidebarMusic';
import SidebarContainer from './Componentes/SidebarContainer';
import SectionMusicArtistas from './Componentes/SectionMusicArtistas';
import MusicBuscador from './Componentes/MusicBuscador';
import BarraReproduccion from './Componentes/BarraReproduccion';
import SectionMusicMasEscuchados from './Componentes/SectionMusicMasEscuchados';
import PiePagina from './Componentes/PiePagina';

function App() {

  const [cancionActual, setCancionActual] = useState<{
    titulo: string;
    audioUrl: string;
  } | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState(''); 

  const canciones = [
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

  const filteredCanciones = searchTerm 
    ? canciones.filter(cancion =>
        cancion.titulo.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : canciones;

  const artistas = [
  {
    nombre: "The Pineapple Thief",
    imagen: "https://www.therockpit.net/wp-content/uploads/2018/07/news-thepineapplethief2.jpg",
    likes: 20
  },
  {
    nombre: "Tool",
    imagen: "https://cdn.theatlantic.com/thumbor/zMv-9_ru-2uEFRFfLcGIdwG8jIo=/0x200:1920x1280/976x549/media/img/mt/2019/08/unnamed_16/original.jpg",
    likes: 10
  },
  {
    nombre: "Porcupine Tree",
    imagen: "https://porcupinetree.com/wp-content/uploads/2023/11/CleanShot-2023-11-05-at-12%E2%80%AF.55.41.jpg",
    likes: 20
  },
  {
    nombre: "Anomia",
    imagen: "../Public/Anomia.jpg",
    likes: 20
  },
  {
    nombre: "Deftones",
    imagen: "https://i.pinimg.com/736x/9d/d5/3d/9dd53d25fb2ddf28749b345a73114a61.jpg",
    likes: 20
  },
  {
    nombre: "Gojira",
    imagen: "https://indierocks.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/bfi_thumb/Gojira-Band-3qy0hbhdhc8hrbpmhumk11ea0fuk5hg4s8vacgkl8swwqvkwhqf7x8q5jdkuf4.jpg",
    likes: 20
  }
  
];

  const filteredArtistas = searchTerm 
    ? artistas.filter(artista =>
        artista.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : artistas;

  return (
    <div className="Pagina">
    <EncabezadoMusic
      Logo="../Public/logo.png"
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
          Biblioteca="../Public/Biblioteca2.png"
          Playlist="../Public/Playlist2.png"
          >
          <SidebarMusic
          Lista="../Public/tus_me_gusta.png"
          />
          <SidebarMusic
          Lista="../Public/tus episodios.png"
          />
          <SidebarMusic
          Lista="../Public/The Emptiness Machine.png"
          />
          <SidebarMusic
          Lista="../Public/ramen_para_dos.png"
          />
          <SidebarMusic
          Lista="../Public/red_hot.png"
          />
          <SidebarMusic
          Lista="../Public/gojira.png"
          />
          <SidebarMusic
          Lista="../Public/play_list.png"
          />
          <SidebarMusic
          Lista="../Public/nirvana.png"
          /> 
          <SidebarMusic
          Lista="../Public/gorillaz.png"
          />      
        </SidebarContainer>
        

        <main className="Contenido">
          <section>
            <SectionMusicContainer Titulo="Tus Canciones Favoritas">
              {filteredCanciones.map((cancion, index) => (
                <SectionMusic
                  key={index}
                  Titulo={cancion.titulo}
                  Arte={cancion.arte}
                  Año={cancion.año}
                  onPlay={() => {
                    setCancionActual(cancion);
                    setIsPlaying(true);
                  }}
                />
              ))}
            </SectionMusicContainer>
          </section>

          <section>
            <SectionMusicContainer Titulo="Artistas">
              {filteredArtistas.map((artista, index) => (
                <SectionMusicArtistas
                  key={index}
                  Titulo={artista.nombre}
                  Artista={artista.imagen}
                  Likes={artista.likes}
                />
              ))}
            </SectionMusicContainer>
          </section>

          <section>
            <SectionMusicContainer Titulo="Los más escuchados">

          <SectionMusicMasEscuchados
            Cancion="The Pot"
            Autor="Tool"
            Imagen="https://cdn-images.dzcdn.net/images/cover/c7a6f1259a8f9df284168a28988b8ad7/500x500-000000-80-0-0.jpg"
            Año="Publicado el 28/04/2006"
          />
          <SectionMusicMasEscuchados
            Cancion="Aenima"
            Autor="Tool"
            Imagen="https://lastfm.freetls.fastly.net/i/u/770x0/011b818d46c10cb5e15a4a7663fca054.jpg#011b818d46c10cb5e15a4a7663fca054"
            Año="Publicado el 17/09/1996"        
          />
          <SectionMusicMasEscuchados
            Cancion="Spiders"
            Autor="System of a Down"
            Imagen="https://images.genius.com/263bf7683bab544908e6fe6087d04a98.1000x1000x1.png"
            Año="Publicado el 30/06/1998"       
          />
          <SectionMusicMasEscuchados
            Cancion="The Chant"
            Autor="Gojira"
            Imagen="https://m.media-amazon.com/images/I/41Z-tcO9X7L._AC_UF1000,1000_QL80_.jpg"
            Año="Publicado el 25/04/2021"        
          />
          <SectionMusicMasEscuchados
            Cancion="Flying Whales"
            Autor="Gojira"
            Imagen="https://i1.sndcdn.com/artworks-000162552693-ouc73j-t1080x1080.jpg"
            Año="Publicado el 07/09/2006"   
          />
          <SectionMusicMasEscuchados
            Cancion="Armenia"
            Autor="Anomia"
            Imagen="../Public/Armenia.jpg"
            Año="Publicado el 18/08/2018"       

          />
          </SectionMusicContainer>
          </section>


          <BarraReproduccion
            BotonAleatorio="../Public/Aleatorio.png"
            BotonPlay="../Public/Play.png"
            BotonSiguiente="../Public/Siguiente.png"
            BotonAnterior="../Public/Anterior.png"
            BotonRepetir="../Public/Repetir.png"
            cancionActual={cancionActual}
            setCancionActual={setCancionActual}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            listaCanciones={canciones}
          />
        </main>
      </div>


      <PiePagina
        Logo="../Public/logo.png"
        Texto="© AntiCopyright ningún derecho reservado"
        Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
      />
    </div>
  );
}
export default App;

