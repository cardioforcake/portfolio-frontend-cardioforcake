import {useEffect, useState, useRef} from 'react';
import {auth} from './services/firebase';
import './App.css';
import SnakeApp from './projects/SnakeApp/SnakeApp';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {createUser, fetchUser} from './services/user-services'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const [userState, setUserState] = useState({
    user: null,
  })

  const [userData, setUserData] = useState({
    userName: null,
    userId: null,
    snakeScore: 0,
    _id: null
  })

  const home = useRef(true);
  
  const away = useRef(false)

  useEffect(function(){

    async function getUser(user){
      const usr = await fetchUser(user.uid);
      if(usr[0]){
        setUserData({
          userName: usr[0].userName,
          userId: usr[0].userId,
          snakeScore: usr[0].snakeScore,
          _id: usr[0]._id
        })
      }else{
        const newUsr = await createUser({
          userName: user.displayName,
          userId: user.uid,
          snakeScore: 0
        })
        setUserData({
          userName: newUsr[0].userName,
          userId: newUsr[0].userId,
          snakeScore: newUsr[0].snakeScore,
          _id: usr[0]._id
        })
      }
    }

    if(userState.user){
      getUser(userState.user)
    }else{
      setUserData({
        userName: null,
        userId: null,
        snakeScore: 0,
        _id: null
      })
    }

  },[userState.user])

  return (
    <div className="App">
      <div className="body">

        <BrowserRouter>
          <Switch>
            <Route path="/snake">
              <Header user={userState.user} home={away.current}/>
              <SnakeApp 
                auth={auth} 
                user={userState.user} 
                setUserState={setUserState} 
                userData={userData} 
                setUserData={setUserData}
              />
            </Route>
            <Route path="/">
              <Header user={userState.user} home={home.current}/>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>


        </div>
    </div>
  );
}

export default App;
