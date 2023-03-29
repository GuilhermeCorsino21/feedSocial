import { ThumbsUp, TrashSimple } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/dmalberto.png' alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Alberto</strong>
                            <time title='25 de Fevereiro às 13:25h' dateTime="2023-02-25 13:25:40">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deleter comentário'>
                            <TrashSimple size={22}/>
                        </button>
                        
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Curtir <span>70</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}