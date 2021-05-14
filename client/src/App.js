import './App.css';
import Main from './views/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
                  <Router>
                <div>
                    <Switch>
                       <Route path="/people/:id">
                            <Detail />
                        </Route> 
                        <Route path="/people">
                            <ProductList />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </Router>
    </div>

  );
}

export default App;
