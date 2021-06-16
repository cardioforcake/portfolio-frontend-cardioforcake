
import {addComment, updateComment, deleteComment} from '../../services/service-functions'
import styles from './CommentCRUD.module.css'



function CommentCRUD(props){

    async function handleSubmit(event){
        event.preventDefault();
        if(props.userComment.comment===null && !!event.target.comment.value){
            const comments = await addComment({
                comment: event.target.comment.value,
                userId: props.user ? props.user.uid : '',
                userName: props.user ? props.user.displayName : 'anonymous',
            })

            props.setComments(comments)
            props.setUserComment({
                comment: props.user ? event.target.comment.value : null,
                userId: props.user ? props.user.uid : '',
                userName: props.user ? props.user.displayName : 'anonymous',
                _id: props.user? props.userComment._id : ''
            })
            if(!props.user){
                event.target.comment.value = null;
            }
        }
        else if(!!event.target.comment.value){
            const comments = await updateComment({
                comment: event.target.comment.value,
                userId: props.user.uid,
                userName: props.user.displayName,
                _id: props.userComment._id
            })
            props.setComments(comments)
            props.setUserComment({
                comment: props.user ? event.target.comment.value : null,
                userId: props.user ? props.user.uid : '',
                userName: props.user ? props.user.displayName : 'anonymous',
                _id: props.user? props.userComment._id : ''
            })
        }
    }

    async function handleDelete(event){
        event.preventDefault();
        const comments = await deleteComment(props.userComment._id);
        props.setComments(comments);
        props.setUserComment({
            comment: null,
            userId: '',
            userRef: 'anonymous'
        })

    }
    
    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                {
                    props.user ? 
                        <textarea name="comment" className={styles.textarea} key={props.userComment.comment ? 'exists':'empty'} defaultValue={props.userComment.comment}></textarea>
                    :
                        <textarea name="comment" className={styles.textarea}></textarea>
                }
                <div className={styles.buttons}>
                {props.userComment.comment ? <button onClick={handleDelete} className={`modal-close ${styles.btn} green waves-effect waves-light btn`}>Delete</button>: ''}
                    <button type="submit" className={`modal-close ${styles.btn} light-green accent-4 waves-effect waves-light btn`}>{props.userComment.comment ? "Edit" : "Add"}</button>
                </div>
            </form>
        </div>
    )

}

export default CommentCRUD;