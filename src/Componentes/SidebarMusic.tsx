import styles from './SidebarMusic.module.css';

type SidebarMusicProps = {
  Principal: string;
  Biblioteca: string;
  Playlists: string;
  Podcast: string;
};

function SidebarMusic(props: SidebarMusicProps) {
  const { Principal, Biblioteca, Playlists, Podcast } = props;
  
  return (
    <section className={styles.iconosContainer}>
      
      <div className={styles.menuItem}>
        <img src={Principal} alt="Inicio" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>
      
      <div className={styles.menuItem}>
        <img src={Biblioteca} alt="Biblioteca" className={styles.icon} />
        <span className={styles.texto}>Biblioteca</span>
      </div>
      
      <div className={styles.menuItem}>
        <img src={Playlists} alt="Playlists" className={styles.icon} />
        <span className={styles.texto}>Playlists</span>
      </div>

      <div className={styles.menuItem}>
        <img src={Podcast} alt="Podcast" className={styles.icon} />
        <span className={styles.texto}>Podcast</span>
      </div>
    </section>
  );
}

export default SidebarMusic;

