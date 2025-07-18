//import { type ReactNode } from 'react';
import styles from './Portada.module.css';

type PortadaProps = {
    imagen:string
    
    
}

function Portada(props: PortadaProps) {
    const {imagen,} = props;
    return (
        <section>
            <img src={imagen} alt="Portada" className={styles.Portada} />                       
        </section>
           
    );
}

export default Portada;