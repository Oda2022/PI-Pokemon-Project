import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from "./components/Home/Home.jsx";
import DetailPoke from "./components/DetailPoke/DetailPoke.jsx";
import CreatedPoke from "./components/CreatedPoke/CreatedPoke.jsx";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/details/:id' element={<DetailPoke/>} />
        <Route path='/create-pokemon/' element={<CreatedPoke/>} />

      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
