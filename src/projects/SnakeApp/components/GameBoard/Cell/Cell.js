import './Cell.css'

function Cell(props){

    if(props.dir ==='up-head' || props.dir === 'down-head' || props.dir === 'left-head' || props.dir === 'right-head'){
        return(
        <div className={`${props.status} ${props.dir} cell`}>
            <div className="eyes">👀</div>
        </div>
        )
    }else{
        return  <div className={`${props.status} ${props.dir} cell`}></div>
    };
}

export default Cell;   