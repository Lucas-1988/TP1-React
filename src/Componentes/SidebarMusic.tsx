import styles from './SidebarMusic.module.css';

type SidebarMusicProps = {
  Principal: string;
  Biblioteca: string;
  Playlists: string;
};

function SidebarMusic(props: SidebarMusicProps) {
  const { Principal, Biblioteca, Playlists } = props;
  
  return (
    <section className={styles.iconosContainer}>
      
      <div className={styles.menuItem}>
        <img src={Principal} alt="Inicio" className={styles.icon} />
        <span className={styles.texto}>Home</span>
      </div>
      
      <div className={styles.menuItem}>
        <img src={Biblioteca} alt="Biblioteca" className={styles.icon} />
        <span className={styles.texto}>Biblioteca</span>
      </div>
      
      <div className={styles.menuItem}>
        <img src={Playlists} alt="Playlists" className={styles.icon} />
        <span className={styles.texto}>Playlists</span>
      </div>
    </section>
  );
}

export default SidebarMusic;

