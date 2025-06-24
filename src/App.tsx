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

  const canciones = [
    {
      titulo: "The Incident - Porcupine Tree",
      audioUrl: "/Musica/porcupine_tree__the_incident.mp3",
      arte: "https://m.media-amazon.com/images/I/41kBPpqJbiL._SX300_SY300_QL70_FMwebp_.jpg",
      año: "2009",
    },
    {
      titulo: "White Pony - Deftones",
      audioUrl: "/Musica/Sextape.mp3",
      arte: "https://cdn-images.dzcdn.net/images/cover/c2942294fe29f749ca9ed2d1b25bb247/500x500-000000-80-0-0.jpg",
      año: "2000",
    },
    {
      titulo: "Lateralus - Tool",
      audioUrl: "/Musica/Parabola.mp3",
      arte: "https://lastfm.freetls.fastly.net/i/u/770x0/ec676167abeb99f85d6fee875d55251e.jpg",
      año: "2001",
    },
    {
      titulo: "10,000 Days - Tool",
      audioUrl: "/Musica/The Pot.mp3",
      arte: "https://lastfm.freetls.fastly.net/i/u/770x0/f177da80ce97e79927b7c32c78463a33.jpg",
      año: "2006",
    },
    {
      titulo: "Fortitude - Gojira",
      audioUrl: "/Musica/Way_Out_of_Here.mp3",
      arte: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBN8FCddZuw9PSBVy4ye8gZAfM8VMF-Ogwg&s",
      año: "2021",
    },
    {
      titulo: "El último de todos - Anomia",
      audioUrl: "/Musica/armenia.mp3",
      arte: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEpwOoCFlWPXaGrK3rScKMyLeVezt0HEVdUJ1NPZyfPsfkaJU1O6hfD3DgDpfilDqmPc&usqp=CAU",
      año: "2022",
    },
  ];

  return (
    <>
      <EncabezadoMusic
        Logo="../Public/logo.png"
        inicioSesion="Iniciar Sesion"
      >
        <MusicBuscador placeholder="Buscar música, albums y artistass" />
      </EncabezadoMusic>

      <SidebarContainer Titulo="Tu Contenido">
        <SidebarMusic
          Principal="../Public/home.png"
          Biblioteca="../Public/Biblioteca.png"
          Playlists="../Public/Playlist.png"
        />
      </SidebarContainer>

      <section>
        <SectionMusicContainer Titulo="Tus Albumes Favoritos">

          {canciones.map((cancion, index) => (
            <SectionMusic
              key={index}
              Titulo={cancion.titulo}
              Arte={cancion.arte}
              Año={cancion.año}
            />
          ))}

        </SectionMusicContainer>
      </section>

      <section>
        <SectionMusicContainer Titulo="Artistas">
          <SectionMusicArtistas

            Titulo="The Pineapple Thief"
            Artista="https://www.therockpit.net/wp-content/uploads/2018/07/news-thepineapplethief2.jpg"
            Likes={20}

          />
          <SectionMusicArtistas
            Titulo="Tool"
            Artista="https://cdn.theatlantic.com/thumbor/zMv-9_ru-2uEFRFfLcGIdwG8jIo=/0x200:1920x1280/976x549/media/img/mt/2019/08/unnamed_16/original.jpg"
            Likes={100}
          />
          <SectionMusicArtistas
            Titulo="Porcupine Tree"
            Artista="https://porcupinetree.com/wp-content/uploads/2023/11/CleanShot-2023-11-05-at-12%E2%80%AF.55.41.jpg"
            Likes={20}
          />
          <SectionMusicArtistas
            Titulo="Anomia"
            Artista="../Public/Anomia.jpg"
            Likes={20}
          />
          <SectionMusicArtistas
            Titulo="Deftones"
            Artista="https://i.pinimg.com/736x/9d/d5/3d/9dd53d25fb2ddf28749b345a73114a61.jpg"

            Likes={20}
          />
          <SectionMusicArtistas
            Titulo="Gojira"
            Artista="https://indierocks.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/bfi_thumb/Gojira-Band-3qy0hbhdhc8hrbpmhumk11ea0fuk5hg4s8vacgkl8swwqvkwhqf7x8q5jdkuf4.jpg"
            Likes={30}
          />
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
      <PiePagina
        Logo="../Public/logo.png"
        Texto="© AntiCopyright ningún derecho reservado"
        Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
      />
    </>
  );
}
export default App;



