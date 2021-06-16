import styles from './Comments.module.css'

function Comments(props){


    return(
        <ul className={styles.ul}>
            {
                props.userComment.comment   ? <li className={styles.userComment}>
                                                    <div className={styles.commentDescription}>{props.userComment.comment}</div>
                                                    <div className={styles.author}>-&nbsp;&nbsp;{props.userComment.userName}</div>
                                                </li> 
                                            : ''
            }
            {
                props.comments.map((com, idx)=>{
                    if(props.user){
                        if(com.userId === props.user.uid || com.userName === 'anonymous'){
                            return ''
                        }else{
                            return <li key={idx} className={styles.namedComment}>
                                    <div className={styles.commentDescription}>{com.comment}</div>
                                    <div className={styles.author}>-&nbsp;&nbsp;{com.userName}</div>
                                </li>
                        }
                    }else{
                        if(com.userName === 'anonymous'){
                            return ''
                        }else if(com.userName){
                            return <li key={idx} className={styles.namedComment}>
                                <div className={styles.commentDescription}>{com.comment}</div>
                                <div className={styles.author}>-&nbsp;&nbsp;{com.userName}</div>
                            </li>
                        }
                    }
                })
            }
            {
                props.comments.map((com, idx)=>{
                    if(com.userName === 'anonymous'){
                        return <li key={idx} className={styles.comment}>
                                <div className={styles.commentDescription}>{com.comment}</div>
                                <div className={styles.author}>-&nbsp;&nbsp;Anonymous</div>
                            </li>
                    }else{
                        return ''
                    }
                })
            }
        </ul>
    )
}

export default Comments;