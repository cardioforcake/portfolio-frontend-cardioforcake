import {Link} from 'react-router-dom';
import styles from './Home.module.css'

function Home(props){
    return(
        <div className={styles.body}>
            <p className={styles.name}>Hi, my name is Stan</p>
            <p className={styles.intro}>Welcome to my game center! There is only one game for now but more will come!</p>
            <div className={styles.card}>
                <Link to="/snake" className="main-buttons">
                    <img src="https://i.imgur.com/ip733jM.png" className={styles.img} />
                </Link>
            </div>
            {/* <Link to="/Stan-Chao-Resume.pdf" target="_blank" download className={`btn ${styles.dl}`}>Download Resume</Link>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/in/stan-chao-dev" target="_blank">
                <img src="https://i.imgur.com/wxcC5SE.png" className={styles.linkImg}/>
              </a>
              <a href="https://github.com/cardioforcake" target="_blank">
                <img src="https://i.imgur.com/2FwLXHd.png" className={styles.linkImg}/>
              </a>
            </div> */}
        </div>
    )
}


export default Home;