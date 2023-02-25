import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/GuilhermeCorsino21.png'/>
                    <div className={styles.authoInfo}>
                        <strong>Luiz Guilherme Bastos</strong>
                        <span> Front End Developer</span>                        
                    </div>
                </div> 

                <time title='25 de Fevereiro às 13:25h' dateTime="2023-02-25 13:25:40">Publicado há 1h</time>               
            </header>
        </article>
    )
}