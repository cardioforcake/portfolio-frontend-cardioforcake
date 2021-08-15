import {Link} from 'react-router-dom';
import styles from './Home.module.css'

function Home(props){
    return(
        <div className={styles.body}>
            <h3 className={styles.name}>Hi, my name is Stan</h3>
            <h4 className={styles.intro}>Please take a look at my most recent project!</h4>
            <div className={styles.card}>
                <Link to="/snake" className="main-buttons">
                    <img src="https://i.imgur.com/ip733jM.png" className={styles.img} />
                </Link>
            </div>
            <Link to="/Stan-Chao-Resume.pdf" target="_blank" download className={`btn ${styles.dl}`}>Download Resume</Link>
        </div>
    )
}


export default Home;