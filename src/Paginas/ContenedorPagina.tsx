import { type ReactNode } from 'react';
import styles from '../Componentes/SectionMusicContainer.module.css';

type ContenedorPaginaProps = {
    
    children: ReactNode;

}

function ContenedorPagina(props: ContenedorPaginaProps) {
    const {children} = props;
    return (
        <section>            
            <div className={styles.MusicContenedor}>{children}</div>
        </section>
           
    );
}

export default ContenedorPagina;