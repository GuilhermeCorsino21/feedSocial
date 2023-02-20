import styles from './Header.module.css'

import pageLogo from '../images/page-logo.svg';


export function Header() {
    return (
        
        <header className={styles.header}>
            <img src={pageLogo} alt="logotipo da página"/>
        </header>
        
    );
};