//import { type ReactNode } from 'react';
import styles from './Portada.module.css';

type PortadaProps = {
    imagen:string
    Titulo: string
    
}

function Portada(props: PortadaProps) {
    const {imagen, Titulo,} = props;
    return (
        <section>
            <img src={imagen} alt="Portada" className={styles.Portada} />
            <h2 className={styles.Titulo}>{Titulo}</h2>            
        </section>
           
    );
}

export default Portada;