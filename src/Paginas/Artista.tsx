import '../Paginas/Home.css';
import { useState } from 'react';

import SectionMusicContainer from '../Componentes/SectionMusicContainer';
import EncabezadoMusic from '../Componentes/EncabezadoMusic';
import SidebarMusic from '../Componentes/SidebarMusic';
import SidebarContainer from '../Componentes/SidebarContainer';
import SectionMusicArtistas from '../Componentes/SectionMusicArtistas';
import MusicBuscador from '../Componentes/MusicBuscador';
import BarraReproduccion from '../Componentes/BarraReproduccion';
import PiePagina from '../Componentes/PiePagina';

function Home() {

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
      imagen: "/Public/Anomia.jpg",
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
    },

  ];

    const artistas_MasEscuchados = [
    {
      nombre: "Billie Eilish",
      imagen: "https://assets.dev-filo.dift.io/img/2019/04/03/bi_sq.jpg",
      likes: 400
    },
    {
      nombre: "Jungle",
      imagen: "https://d94thh4m1x8qv.cloudfront.net/eyJidWNrZXQiOiJkaXktbWFnYXppbmUiLCJrZXkiOiJkL2RpeS9BcnRpc3RzL0ovSlVOR0xFL2p1bmdsZV8yMDE0MDUyOV8wMV8yMDQ4eDEzNjUuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4Mn0sInJlc2l6ZSI6eyJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjoxMzUwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
      likes: 12
    },
    {
      nombre: "Anderson.Paak",
      imagen: "https://www.mrporter.com/content/images/cms/ycm/resource/blob/664354/86073e87643af619344b5087a2060d05/bc803557-7a5d-4c88-8fdd-8540652758ab-data.jpg/w1500_q80.jpg",
      likes: 50
    },
    {
      nombre: "Linkin Park",
      imagen: "https://www.impericon.com/cdn/shop/articles/20250117_lppress_1_8b81abfe-74e8-41a0-a808-1ec07367f66f.png?v=1742368672&width=1000",
      likes: 25
    },
    {
      nombre: "Red Hot Chili Pepers",
      imagen: "https://i.pinimg.com/736x/3f/13/1f/3f131ff8d90c170af9f89588dc00434a.jpg",
      likes: 350
    },
    {
      nombre: "María Becerra",
      imagen: "https://tn.com.ar/resizer/v2/la-artista-presenta-su-nueva-era-fuente-prensa-FBTCWZ6LJFGGHMHLCS6FHSEG2M.jpg?auth=03869da871f72c4dcf9cc5b8d64ecbaeaec17c2d64ef96b78438da94c7a68374&width=1440",
      likes: 500
    },

  ];  

    const EscuchadosRecientemente = [
    {
      nombre: "Cardellino",
      imagen: "https://billboard.ar/wp-content/uploads/2025/03/6740c2c937edc2da672d760a_cardellino.jpg",
      likes: 400
    },
    {
      nombre: "Conociendo Rusia",
      imagen: "https://i0.wp.com/es.rollingstone.com/wp-content/uploads/2024/06/Conociendo-Rusia-vence-la-distancia-en-Jet-Love.jpg?w=1280&ssl=1",
      likes: 12
    },
    {
      nombre: "John Mayer",
      imagen: "https://www.todomusica.org/imagenes/680x380/john_mayer.webp",
      likes: 50
    },
    {
      nombre: "Bersuit Vergarabat",
      imagen: "https://cdn-images.dzcdn.net/images/artist/a29832fac03094740040ed78c8372ea2/500x500-000000-80-0-0.jpg",
      likes: 25
    },
    {
      nombre: "Dua Lipa",
      imagen: "https://www.radiopuntorojo.com/wp-content/uploads/2025/05/dua-lipa-akbee75ukpi7cr1k-1024x576.jpg",
      likes: 350
    },
    {
      nombre: "Doja Cat",
      imagen: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/10FFC/production/_112482696_doja-cat-1392x1044.jpg.webp",
      likes: 500
    },

  ];
  

  const filteredArtistas = searchTerm 
    ? artistas.filter(artista =>
        artista.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : artistas;

    const filteredArtistas_MasEscuchados = searchTerm 
    ? artistas_MasEscuchados.filter(artistas_MasEscuchados =>
        artistas_MasEscuchados.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : artistas_MasEscuchados;

    const filteredEscuchadosRecientemente = searchTerm 
    ? EscuchadosRecientemente.filter(EscuchadosRecientemente =>
        EscuchadosRecientemente.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : EscuchadosRecientemente;    

  return (
    <div className="Pagina">
      <EncabezadoMusic
        Logo="../Public/logo.png"
        LogoHome="../Public/home.png"
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
          <SidebarMusic Lista="../Public/tus_me_gusta.png" />
          <SidebarMusic Lista="../Public/tus episodios.png" />
          <SidebarMusic Lista="../Public/The Emptiness Machine.png" />
          <SidebarMusic Lista="../Public/ramen_para_dos.png" />
          <SidebarMusic Lista="../Public/red_hot.png" />
          <SidebarMusic Lista="../Public/gojira.png" />
          <SidebarMusic Lista="../Public/play_list.png" />
          <SidebarMusic Lista="../Public/nirvana.png" />
          <SidebarMusic Lista="../Public/gorillaz.png" />
        </SidebarContainer>

        <main className="Contenido">
          <section>
            <SectionMusicContainer Titulo="Tus Artistas Favoritos">
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
            <SectionMusicContainer Titulo="Los mas escuchados">
              {filteredArtistas_MasEscuchados.map((artista, index) => (
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
            <SectionMusicContainer Titulo="Los mas odiados">
              {filteredEscuchadosRecientemente.map((artista, index) => (
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
  );
}

export default Home;
