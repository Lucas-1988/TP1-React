//import { Children } from "react";
//import type SectionMusic from "./SectionMusic";
import { type ReactNode } from 'react';
import styles from './SidebarContainer.module.css';

type SidebarMusicContainerProps = {
    Titulo: string
    children: ReactNode;

}

function SidebarMusicContainer(props: SidebarMusicContainerProps) {
    const {Titulo, children} = props;
    return (
        <section>
            <h2 className={styles.Titulo}>{Titulo}</h2>
            <div className={styles.SidebarContenedor}>{children}</div>
        </section>
           
    );
}
export default SidebarMusicContainer; 