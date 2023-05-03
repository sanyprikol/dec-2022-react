import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Layout from "./components/layout/Layout";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";

const App = () =>{
  return (
    <div className="App">

      <div>
        <h2>PLACEHOLDER</h2>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/layout'}>Layout</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>VIEW</h3>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/layout'} element={<Layout/>}>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'comments'} element={<Comments/>}/>
          </Route>
          <Route path={'/about'} element={<About/>}/>
        </Routes>

      </div>

    </div>
  );
}

export default App;
