import {login, logout} from '../../services/firebase';
import styles from './Header.module.css'
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <header>
            <nav className={`${styles.nav}  cyan darken-3`}>
                <div className={props.home ? styles.home : styles.away}>
                    {      
                        props.home ? '' :
                            <Link to="/" className={`main-buttons ${styles.homeButton}`}>
                                <button className={`btn light-green accent-4 waves-effect waves-light ${styles.button}`}>Home</button>
                            </Link>
                    }
                    <ul className={styles.ul}>
                        {
                            props.user ?
                            <>
                                <li className={`${styles.li} ${styles.welcome}`}>Welcome,&nbsp;&nbsp;{props.user.displayName} !</li>
                                <li className={`${styles.li} btn light-green accent-4 waves-effect waves-light ${styles.button}`} onClick={logout}>LogOut</li>
                            </>
                            :
                            <>
                                <li className={`${styles.li} ${styles.welcome}`}>Login to access additional features!</li>
                                <li className={`${styles.li} ${styles.tooltip}`} >
                                    <button className={`btn light-green accent-4 waves-effect waves-light ${styles.button}`} onClick={login}>
                                        Login
                                    </button>
                                    <div className={styles.tooltiptext}>
                                        Enables personalized comments and persists records across different sessons
                                    </div>
                                </li>
                            </>
                        }
                    </ul>
                    
                </div>
            </nav>
        </header>
    )

}

export default Header;