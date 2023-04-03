// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home"
import Gallery from "./components/gallery/gallery"
import About from "./components/about/about"
import Myabout from './components/about/myabout';
import {Route,Routes,Link,Navigate} from "react-router-dom"
import MyNavbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Pagenotfound from './components/Pagenotfound/Pagenotfound';

function App() {


  return (
    <div className="App">
      <MyNavbar />
     


    <Routes>
      <Route path='/' element = {<Landing />}>Home</Route>
      <Route path='/home' element = {<Home />}>Home</Route>
      <Route path='/about' element = {<About />}>About</Route>
      <Route path='/gallery' element = {<Gallery />}>Gallery</Route>
    <Route path='*' element = {<Pagenotfound />}>Home</Route>
    </Routes>
    </div>
  );
}

export default App;
