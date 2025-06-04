//import { Children } from "react";
//import type SectionMusic from "./SectionMusic";
import { type ReactNode } from 'react';
import styles from './SectionMusicContainer.module.css';

type SectionMusicContainerProps = {
    Titulo: string
    children: ReactNode;

}

function SectionMusicContainer(props: SectionMusicContainerProps) {
    const {Titulo, children} = props;
    return (
        <section>
            <h2 className={styles.Titulo}>{Titulo}</h2>
            <div className={styles.MusicContenedor}>{children}</div>
        </section>
           
    );
}

export default SectionMusicContainer;