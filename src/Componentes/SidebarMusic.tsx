import styles from './SidebarMusic.module.css';

type SidebarMusicProps = {
  Biblioteca: string;
  PlayList: string;
  TusMeGusta: string;
  Podcast: string;
  Disco_1: string;
  Disco_2: string;
  Disco_3: string;
  Disco_4: string;
  Disco_5: string;
  Disco_6: string;
  Playlist_Lucas: string;

};

function SidebarMusic(props: SidebarMusicProps) {
  const {  Biblioteca, PlayList, TusMeGusta, Podcast,Disco_1, Disco_2, Disco_3, Disco_4, Disco_5, Disco_6, Playlist_Lucas} = props;
  
  return (
    <section className={styles.iconosContainer}>
      
    
      <div className={styles.menuItem}>
        <img src={Biblioteca} alt="Biblioteca" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

       <div className={styles.menuItem}>
        <img src={PlayList} alt="playlist" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>
      
      <div className={styles.menuItem}>
        <img src={TusMeGusta} alt="TusMeGusta" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Podcast} alt="Tus Episodios" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Disco_1} alt="The Emptiness Machine" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Disco_2} alt="Ramen para dos" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Disco_3} alt="Red Hot Chili Peppers" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Disco_4} alt="From Mars to Sirius" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Disco_5} alt="Feel Good Ind" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Disco_6} alt="Smells Like Teen Spirit" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>

      <div className={styles.menuItem}>
        <img src={Playlist_Lucas} alt="Album Lucas" className={styles.Arte} />
        <span className={styles.texto}></span>
      </div>
    </section>
    
    
  );
}

export default SidebarMusic;

