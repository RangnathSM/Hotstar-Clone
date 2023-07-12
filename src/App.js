import './App.css';
import Navbar from './Components/navbar';
import '../src/Styles/navbar.css'
import Home from './Components/Home';
import '../src/Styles/Home.css'
import Movies from './Components/Movies';
import Footer from './Components/footer';
import Celebs from './Components/celebs';
import PageNotFound from './Components/404';
import AddFavourites from './Components/addFavourites';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/addFavourites' element={<AddFavourites/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
