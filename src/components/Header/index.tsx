import styles from './styles.module.scss'

import { SingInButton } from '../SingInButton/index'


export function Header (){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />

                <nav>
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Posts</a>
                </nav>

                <SingInButton />
            </div>
        </header>
    );
} 