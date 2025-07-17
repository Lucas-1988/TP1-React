import { useParams } from "react-router-dom";
import SidebarMusic from "../Componentes/SidebarMusic";
import SidebarContainer from "../Componentes/SidebarContainer";
import PiePagina from "../Componentes/PiePagina";
import Portada from "../Componentes/Portada";
import Informacion from "../Componentes/Informacion";
import { artistas } from "../Hooks/artistasData";
import { canciones } from "../Hooks/cancionesData";

function Descripcion({ tipo }: { tipo: "artista" | "cancion" }) {
  const { nombre } = useParams();

  const data = tipo === "artista"
    ? artistas.find(a => a.id === nombre)
    : canciones.find(c => c.id === nombre);

  if (!data) return <div>No se encontró la información.</div>;

  return (
    <div className="detalles-layout">
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
          "gojira.png",
          "play_list.png",
          "nirvana.png",
          "gorillaz.png"
        ].map((img, index) => (
          <SidebarMusic key={index} Lista={`/Public/${img}`} />
        ))}
      </SidebarContainer>

      <main>
        <h1>Contenido cargado</h1>
        <Portada imagen={data.imagen} Titulo={data.nombre}>
          {/* cualquier contenido opcional dentro de Portada */}
        </Portada>
        <Informacion texto={data.descripcion} 
        />
        {/* otros componentes opcionales */}
      </main>

      <PiePagina
        Logo="/Public/logo.png"
        Texto="© AntiCopyright ningún derecho reservado"
        Texto2="Hecho por Lucas Leonczyk y Tania Maldonado para Informatorio"
      />
    </div>
  );
}

export default Descripcion;
