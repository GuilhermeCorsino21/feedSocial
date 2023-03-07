import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/GuilhermeCorsino21.png' />
                    <div className={styles.authoInfo}>
                        <strong>Luiz Guilherme Bastos</strong>
                        <span> Front End Developer</span>
                    </div>
                </div>

                <time title='25 de Fevereiro às 13:25h' dateTime="2023-02-25 13:25:40">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                    <p>Fala galeraa 👋</p>
                    <p>Estou fazendo mais um projeto para meu portfólio utilizando o REACT.js</p>
                    <p>👉{' '} <a href=''> Meu gitHub | @GuilhermeCorsino21</a></p>
                    <p> <a href=''>#React #FrontEnd #Developer #BentoDinossauro</a></p>
                
            </div>

            <form className={styles.commentForms}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                     <button type="submit"> Comentar </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}