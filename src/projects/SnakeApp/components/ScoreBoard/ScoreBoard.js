import styles from './ScoreBoard.module.css'

function ScoreBoard(props){

    function displayInstrucitions(inst){
        if(inst===0){
            return <h6 className={styles.h6}>Press ⬅️, ⬆️ or ➡️ to start the game!</h6>
        }else if(inst===1){
            return <h6 className={styles.h6}>Eat the green apples!</h6>
        }else if(inst===2){
            return <h6 className={styles.h6}>Game Over! Press ENTER to reset the game</h6>
        }
    }

    return(
        <div>
            <div className={styles.scoreBoard}>
                    <div className={styles.scores}>
                        <h5 className={styles.userHighScoreTitle}>Your High Score:</h5>
                        <h5 className={styles.userHighScore}>{props.userScore}</h5>
                        <h5 className={styles.scoreTitle}>Score:</h5>
                        <h5 className={styles.score}>{props.score}</h5>
                    </div>
                    <div className={styles.instructions}>
                        {displayInstrucitions(props.instructions)}
                    </div>
            </div>
        </div>
    )
}

export default ScoreBoard;