import {Link} from 'react-router-dom';
import styles from './Home.module.css'

function Home(props){
    return(
        <div className={styles.body}>
            <h3 className={styles.name}>Hi, my name is Stan</h3>
            <h4 className={styles.intro}>Please take a look at some of the projects that I've worked on!</h4>
            <div className={styles.card}>
                <Link to="/snake" className="main-buttons">
                    <img src="https://i.imgur.com/ip733jM.png" className={styles.img} />
                </Link>
            </div>
        </div>
    )
}


export default Home;