import styles from './SectionMusicArtistas.module.css';

type SectionMusicArtistas = {
  Titulo: string;
  Artista: string;  
  Likes?: number;  
}

function SectionMusic(props:SectionMusicArtistas) {
    const {Titulo,Artista,Likes} = props;
    return (
        <section className={styles.Contenedor}>            
            <img src={Artista} alt={Titulo} className={styles.Artista} />
            <h2 className={styles.Titulo}>{Titulo}</h2>            
            <h5 className={styles.Reproducciones}>{Likes} mil Reproducciones</h5>                       
        </section>
           
    )
}

export default SectionMusic;