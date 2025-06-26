import { type ReactNode } from 'react';
import styles from './SidebarContainer.module.css';

type SidebarMusicContainerProps = {
    
    children: ReactNode;

}

function SidebarMusicContainer(props: SidebarMusicContainerProps) {
    const { children} = props;
    return (
        <section>
            <div className={styles.SidebarContainer}>{children}</div>
        </section>
           
    );
}
export default SidebarMusicContainer;