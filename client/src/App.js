import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home} />

      </Switch>
  
    </BrowserRouter>
  );
}

export default App;
