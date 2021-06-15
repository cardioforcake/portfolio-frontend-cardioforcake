import styles from './ScoreBoard.module.css'

function ScoreBoard(props){
    return(
        <div>
            <div className={styles.scoreBoard}>
                <div className={styles.overlay}>
                    <div>
                        <h5 className={styles.scoreTitle}>Score:</h5>
                        <h5 className={styles.score}>{props.score}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;