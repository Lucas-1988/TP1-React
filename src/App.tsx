import './App.css';
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
  return (
    <>
      <EncabezadoMusic  
        Logo="../Public/logo.png"
        inicioSesion="Iniciar Sesion"
      >
        <MusicBuscador placeholder="Buscar música, nada de cumbia y esas cosas" />
      </EncabezadoMusic>
      
      <SidebarContainer 
          Titulo="Tu Contenido">    
        <SidebarMusic
          Principal='../Public/home.png'
          Biblioteca='../Public/Biblioteca.png'
          Playlists='../Public/Playlist.png'
        />
      </SidebarContainer>
      
      <section>
        <SectionMusicContainer Titulo="Tus Albumes Favoritos">
          <SectionMusic
            Titulo="The Incident - Porcupine Tree"
            Arte="https://m.media-amazon.com/images/I/41kBPpqJbiL._SX300_SY300_QL70_FMwebp_.jpg"
            Año="2009"       
          />
          <SectionMusic
            Titulo="White Pony - Deftones"
            Arte="https://cdn-images.dzcdn.net/images/cover/c2942294fe29f749ca9ed2d1b25bb247/500x500-000000-80-0-0.jpg"
            Año="2000"        
          />
          <SectionMusic
            Titulo="Lateralus - Tool"
            Arte="https://lastfm.freetls.fastly.net/i/u/770x0/ec676167abeb99f85d6fee875d55251e.jpg#ec676167abeb99f85d6fee875d55251e"
            Año="2001"       
          />
          <SectionMusic
            Titulo="10,000 Days - Tool"
            Arte="https://lastfm.freetls.fastly.net/i/u/770x0/f177da80ce97e79927b7c32c78463a33.jpg#f177da80ce97e79927b7c32c78463a33"
            Año="2006"        
          />
          <SectionMusic
            Titulo="Fortitude - Gojira"
            Arte="https://icarusmusicstore.com/28936-medium_default/gojira-fortitude-cd.jpg"
            Año="2021"       
          />
          <SectionMusic
            Titulo="El último de todos - Anomia"
            Arte="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEpwOoCFlWPXaGrK3rScKMyLeVezt0HEVdUJ1NPZyfPsfkaJU1O6hfD3DgDpfilDqmPc&usqp=CAU"
            Año="2022"        
          />
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
            Likes={10}
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
            Likes={20}
          />
        </SectionMusicContainer>
      </section>
      
      <section>
        <SectionMusicContainer Titulo="Los mas escuchados">
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
            Año="Publicado el 28/04/2006"        
          />
          <SectionMusicMasEscuchados
            Cancion="Lateralus"
            Autor="Tool"
            Imagen="https://lastfm.freetls.fastly.net/i/u/770x0/ec676167abeb99f85d6fee875d55251e.jpg#ec676167abeb99f85d6fee875d55251e"
            Año="Publicado el 28/04/2006"       
          />
          <SectionMusicMasEscuchados
            Cancion="10000 Days"
            Autor="Tool"
            Imagen="https://lastfm.freetls.fastly.net/i/u/770x0/f177da80ce97e79927b7c32c78463a33.jpg#f177da80ce97e79927b7c32c78463a33"
            Año="Publicado el 28/04/2006"        
          />
          <SectionMusicMasEscuchados
            Cancion="Fear Inoculum"
            Autor="Tool"
            Imagen="https://lastfm.freetls.fastly.net/i/u/770x0/a8157f4aa80eff044aaf393a5d5a7073.jpg#a8157f4aa80eff044aaf393a5d5a7073"
            Año="Publicado el 28/04/2006"       
          />
            <SectionMusicMasEscuchados
            Cancion="Armenia"
            Autor="Anomia"
            Imagen="../Public/Armenia.jpg"
            Año="Publicado el 28/04/2006"       
          />
        </SectionMusicContainer>
      </section>
      
      <BarraReproduccion
        BotonAleatorio="../Public/Aleatorio.png"  
        BotonPlay="../Public/Play.png"
        BotonSiguiente="../Public/Siguiente.png"
        BotonAnterior="../Public/Anterior.png" 
        BotonRepetir="../Public/Repetir.png" 
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
