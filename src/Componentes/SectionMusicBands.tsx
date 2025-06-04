//import { Children } from "react";
//import type SectionMusic from "./SectionMusic";
import { type ReactNode } from 'react';
import styles from './SectionMusicContainer.module.css';

type SectionMusicBandsProps = {
    children: ReactNode;

}

function SectionMusicBandsProps(props: SectionMusicBandsProps) {
    const {children} = props;
    return (
        <section>
            <div className={styles.MusicContenedor}>{children}</div>
        </section>
           
    );
}

export default SectionMusicBandsProps;