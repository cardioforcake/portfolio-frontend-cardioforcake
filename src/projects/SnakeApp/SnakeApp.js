import {useEffect, useState, useRef} from 'react';
import styles from './SnakeApp.module.css';
import GameBoard from './components/GameBoard/GameBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import Comments from './components/Comments/Comments';
import Modal from "./Modal";
import {fetchComments} from './services/service-functions'
import {auth} from '../../services/firebase'
import {updateSnakeScore} from '../../services/user-services'

function checkCollision(head, tail){
  let collision = false;
  if(Number(`${head[0]}${head[1]}`) < 11 || Number(`${head[0]}${head[1]}`) > 31 || Number(`${head[2]}${head[3]}`) < 11 || Number(`${head[2]}${head[3]}`)>31){
    return true;
  }
  tail.forEach(t=>{
    if(t.loc === head){
      collision = true;
    }
  });
  return collision;
}



function SnakeApp(props) {

  const [score, setScore] = useState(0)
  
  const [gameOver, setGameOver] =useState(false)

  const [apple, setApple] = useState('2026')

  const [snake, setSnake] = useState([
    {loc: '2022', dir: 'up'},
    {loc: '2021', dir: 'up'}, 
    {loc: '2020', dir: 'up'}, 
    {loc: '2019', dir: 'up-tail'},
  ])

  const [direction, setDirection]=useState('up')

  const [ticking, setTicking] = useState(false)

  let time = useRef()

  const [instructions, setInstructions] = useState(0)

  const [comments, setComments]=useState([
    {
      comment: null,
      userId: null,
      userName: null,
    }
  ]);

  const [userComment, setUserComment] = useState({
    comment: null,
    userId: '',
    userName: 'anonymous',
    _id: ''
  })

  useEffect(()=>{
    async function getSnakeComments(){
        const fetchedComments = await fetchComments();
        setComments(fetchedComments)
    };

    getSnakeComments();

    auth.onAuthStateChanged(user=> props.setUserState({user}))

  },[]);

  useEffect(()=>{
    comments.forEach(com =>{
      if(props.user){
        if(com.userId === props.user.uid){
          setUserComment(com)
        }
      }else{
        setUserComment({
          comment: null,
          userId: '',
          userRef: 'anonymous'
        })
      }
    })
  },[comments, props.user])


  useEffect(()=>{

        function handleKeyPress(event){
          switch(event.keyCode){
            case 13:
              event.preventDefault();
              if(gameOver){
                setSnake([
                  {loc: '2022', dir: 'up'},
                  {loc: '2021', dir: 'up'}, 
                  {loc: '2020', dir: 'up'}, 
                  {loc: '2019', dir: 'up-tail'},
                ])
                setApple('2026')
                setDirection('up')
                setGameOver(false)
                setScore(0)  
                setInstructions(0)
              }
              break;
            case 37:
              event.preventDefault();
              if(ticking){
                if(snake[0].dir !== 'left' && snake[0].dir !== 'right' && direction !== 'left'){
                  setDirection('left');
                }
              }else if(gameOver){
                console.log('press ENTER to reset the game')
              }else{
                setTicking(true)
                setDirection('left')
                setInstructions(1)
              }
              break;
            case 38:
              event.preventDefault();
              if(ticking){
                if(snake[0].dir !== 'up' && snake[0].dir !== 'down' && direction !== 'up'){
                  setDirection('up');
                }
              }else if(gameOver){
                console.log('press ENTER to reset the game')
              }else{
                setTicking(true)
                setInstructions(1)
              } 
              break;
            case 39:
              event.preventDefault();
              if(ticking){
                if(snake[0].dir !== 'left' && snake[0].dir !== 'right' && direction !== 'right'){
                  setDirection('right');
                }
              }else if(gameOver){
                console.log('press ENTER to reset the game')
              }else{
                setTicking(true)
                setDirection('right')
                setInstructions(1)
              } 
              break;
            case 40:
              if(ticking){
                if(snake[0].dir !== 'up' && snake[0].dir !== 'down' && direction !== 'down'){
                  setDirection('down');
                }
              }else if(gameOver){
                console.log('press ENTER to reset the game')
              }
              break;
            default:
              break;
          }
        }

      document.addEventListener('keydown', handleKeyPress)
      return ()=>{ document.removeEventListener('keydown', handleKeyPress) }
  },[direction,ticking,snake, gameOver, score])


  useEffect(function(){

        function checkCapture(head, body){
          if(head[0].loc===apple){
            setScore(function(prev){
              return prev + 1
            })
            setApple(function(){
              let locArray = [];
              body.forEach(sec=>{
                locArray.push(sec.loc)
              });
              let newApple = ''
              do {
                newApple = `${Math.floor(Math.random()*21 + 11)}${Math.floor(Math.random()*21 + 11)}`
              }while(locArray.includes(newApple));
              
              return newApple;
            })
            return body
          }else{
            body.pop()
            return body
          }
        }

        function updateTailEnd(snakeNew){
          switch(snakeNew[snakeNew.length - 1].dir){
            case 'up':
                snakeNew[snakeNew.length - 1].dir = 'up-tail';
                break;
            case 'down':
                snakeNew[snakeNew.length - 1].dir = 'down-tail';
                break;
            case 'right':
                snakeNew[snakeNew.length - 1].dir = 'right-tail';
                break;
            case 'left':
                snakeNew[snakeNew.length - 1].dir = 'left-tail';
                break;
            case 'right-up':
                snakeNew[snakeNew.length - 1].dir = 'up-tail';
                break;
            case 'left-up':
                snakeNew[snakeNew.length - 1].dir = 'up-tail';
                break;
            case 'up-right':
                snakeNew[snakeNew.length - 1].dir = 'right-tail';
                break;
            case 'down-right':
                snakeNew[snakeNew.length - 1].dir = 'right-tail';
                break;
            case 'right-down':
                snakeNew[snakeNew.length - 1].dir = 'down-tail';
                break;
            case 'left-down':
                snakeNew[snakeNew.length - 1].dir = 'down-tail';
                break;
            case 'up-left':
                snakeNew[snakeNew.length - 1].dir = 'left-tail';
                break;
            case 'down-left':
                snakeNew[snakeNew.length - 1].dir = 'left-tail';
                break;
            default:
                break;
          }
          return snakeNew;
        }

        function moveSnake(prev){
          let collision
          let newHead
          let newSnake

          switch(direction){
            case 'up':
              newHead = [{
                          loc: `${Number(`${prev[0].loc[0]}${prev[0].loc[1]}`)}${Number(`${prev[0].loc[2]}${prev[0].loc[3]}`)+1}`,
                          dir: 'up'
                        }];
              if(checkCollision(newHead[0].loc, prev)){
                collision = true;
                break;
              }
              newSnake=newHead.concat(prev);
              switch(newSnake[1].dir){
                case 'left':
                  newSnake[1].dir = 'left-up';
                  break;
                case 'right':
                  newSnake[1].dir = 'right-up';
                  break;
                default:
                  break;
              }
              newSnake = checkCapture(newHead, newSnake);
              newSnake = updateTailEnd(newSnake);
              break;
            case 'down':
              newHead = [{
                          loc: `${Number(`${prev[0].loc[0]}${prev[0].loc[1]}`)}${Number(`${prev[0].loc[2]}${prev[0].loc[3]}`)-1}`,
                          dir: 'down'
                        }];
              if(checkCollision(newHead[0].loc, prev)){
                collision = true;
                break;
              }
              newSnake=newHead.concat(prev);
              switch(newSnake[1].dir){
                case 'left':
                  newSnake[1].dir = 'left-down';
                  break;
                case 'right':
                  newSnake[1].dir = 'right-down';
                  break;
                default:
                  break;
              }
              newSnake = checkCapture(newHead, newSnake);
              newSnake = updateTailEnd(newSnake);
              break;
            case 'right':
              newHead = [{
                          loc: `${Number(`${prev[0].loc[0]}${prev[0].loc[1]}`)+1}${Number(`${prev[0].loc[2]}${prev[0].loc[3]}`)}`,
                          dir: 'right'
                        }];
              if(checkCollision(newHead[0].loc, prev)){
                collision = true;
                break;
              }
              newSnake=newHead.concat(prev);
              switch(newSnake[1].dir){
                case 'up':
                  newSnake[1].dir = 'up-right';
                  break;
                case 'down':
                  newSnake[1].dir = 'down-right';
                  break;
                default:
                  break;
              }
              newSnake = checkCapture(newHead, newSnake);
              newSnake = updateTailEnd(newSnake);
              break;
            case 'left':
              newHead = [{
                          loc: `${Number(`${prev[0].loc[0]}${prev[0].loc[1]}`)-1}${Number(`${prev[0].loc[2]}${prev[0].loc[3]}`)}`,
                          dir: 'left'
                        }];
              if(checkCollision(newHead[0].loc, prev)){
                collision = true;
                break;
              }
              newSnake=newHead.concat(prev);
              switch(newSnake[1].dir){
                case 'up':
                  newSnake[1].dir = 'up-left';
                  break;
                case 'down':
                  newSnake[1].dir = 'down-left';
                  break;
                default:
                  break;
              }
              newSnake = checkCapture(newHead, newSnake);
              newSnake = updateTailEnd(newSnake);
              break;
            default:
              break;
          }
          if(collision){
            setTicking(false);
            props.setUserData(prevState =>{
              const highScore = Math.max(prevState.snakeScore, score);
              return({
                ...prevState,
                snakeScore: highScore
              })
            })
            updateSnakeScore({
              ...props.userData,
              snakeScore: Math.max(props.userData.snakeScore, score)
            })
            setGameOver(true);
            setInstructions(2)
            return prev;
          }else{
            return newSnake;
          }
        }

      if(ticking){
        time.current = setInterval(function(){
          setSnake(function(prevState){
              return moveSnake(prevState)
          })
        }, 100)
      }else if(!ticking){
        clearInterval(time.current)
      }

      return() => clearInterval(time.current)
  }, [ticking, direction, apple, gameOver])

  return (
    <div className="App">
      <main className={styles.main}>
        <div className={styles.gameArea}>
          <ScoreBoard score={score} userScore={props.userData.snakeScore} instructions={instructions} user={props.user}/>
          <GameBoard snake={snake} setTicking={setTicking} direction={direction} setDirection={setDirection} apple={apple}/>
          <div className={styles.commentArea}>
            <Comments comments={comments} userComment={userComment} user={props.user}/>
            <Modal 
              idx={props.user ? "add": "edit"} 
              setComments={setComments} user={props.user} 
              userComment={userComment} setUserComment={setUserComment}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SnakeApp;
