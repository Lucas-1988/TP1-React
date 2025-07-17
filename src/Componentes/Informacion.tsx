//import { type ReactNode } from 'react';
import styles from './SectionMusicContainer.module.css';

type InformacionProps = {
    texto: string
    

}

function Informacion(props: InformacionProps) {
    const {texto, } = props;
    return (
        <section>
            <h2 className={styles.texto}>{texto}</h2>
            
        </section>
           
    );
}

export default Informacion;