import { type ReactNode } from 'react';
import styles from './SidebarMusic.module.css';

type SidebarMusicContainerProps = {
    Biblioteca: string;
    Playlist: string;
    children: ReactNode;

}

function SidebarContainer(props: SidebarMusicContainerProps) {
    const { Biblioteca, Playlist, children} = props;
    return (
    <section className={styles.iconosContainer}>      
    
      <div className={styles.Biblioteca}>
        <img src={Biblioteca} alt="Biblioteca" className={styles.Biblioteca} />
        <span className={styles.texto}>Biblioteca</span>        
      </div>
      <div className={styles.Biblioteca}>
        <img src={Playlist} alt="Playlist" className={styles.Playlist} />
        <span className={styles.texto}>Playlists</span>        
      </div>
       <section>
           <div className={styles.Arte}>{children}</div>
       </section>
    </section>
           
    );
}
export default SidebarContainer;