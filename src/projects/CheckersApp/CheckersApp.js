import {useEffect, useState, useRef} from 'react';
import styles from './CheckersApp.module.css'
import {populateBoard} from './services/service-functions'
import CheckersBoard from './components/CheckersBoard/CheckersBoard'


function CheckersApp(props){
    const [locTracker, setLocTracker] = useState(populateBoard);
    const [moveTracker, setMoveTracker] = useState({
        selected: 'none',
        destination1: 'none',
        destination2: 'none',
    })
    return (
        <div className={styles.testing}>
            <CheckersBoard locTracker={locTracker} moveTracker={moveTracker}/>
        </div>
    )
};

export default CheckersApp