import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { useState } from 'react'



export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Bom post, Valeu!'
                
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault()        

        setComments([...comments , newCommentText]);
        setNewCommentText('');         
          
    };    

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeleteds = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteds);
    }

    
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authoInfo}>
                        <strong>{author.name}</strong>
                        <span> {author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                
                    {content.map(line =>{
                        if (line == 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type == 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForms}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    name ="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                />
                <footer>
                     <button type="submit"> Comentar </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                })}                
            </div>
        </article>
    )
}