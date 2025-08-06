import { type ReactNode } from 'react';
import styles from './CancionDetalleContainer.module.css'; 

type CancionDetalleContainerProps = {    
    children: ReactNode;    

}
function CancionDetalleContainer(props: CancionDetalleContainerProps) {
    const {children} = props;    
    return (
        <section>            
            <div className={styles.MusicContenedorFavoritos }>{children}</div>
        </section>
           
    );
}

export default CancionDetalleContainer;