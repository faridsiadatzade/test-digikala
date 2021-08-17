import './App.css';
import Bascket from './app/bascket';
import Home from './app/home';
import Product from './app/product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/bascket">
              <Bascket />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
