import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import Posts from "./components/posts/Posts";

function App() {
    const [userId, setUserId] = useState(null);
  return (
    <div className="App">
     <Users setUsersId={setUserId}/>
        {userId && <Posts userId={userId}/>}
    </div>
  );
}

export default App;
