import styles from './SidebarMusic.module.css';
import { type FC } from 'react';

type SidebarMusicProps = {
  Lista: string;  
};

const SidebarMusic: FC<SidebarMusicProps> = ({ Lista }) => {
  return (
    <div className={styles.Biblioteca}>
      <img src={Lista} alt="Arte" className={styles.Arte}/>    
    </div>
  );
};

export default SidebarMusic;


