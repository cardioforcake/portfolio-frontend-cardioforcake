import {useState} from 'react'
import {auth} from './services/firebase'
import './App.css';
import SnakeApp from './projects/SnakeApp/SnakeApp'
import Header from './components/Header/Header'

function App() {

  const [userState, setUserState] = useState({
    user: null,
  })

  return (
    <div className="App">
      <div className="body">
        <Header user={userState.user}/>
        <SnakeApp auth={auth} user={userState.user} setUserState={setUserState}/>
        </div>
    </div>
  );
}

export default App;
