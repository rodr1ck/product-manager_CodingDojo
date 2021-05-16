import './App.css'
import Main from './views/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Detail from './views/Detail'
import Update from './views/Update'

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/products/:id/edit">
                            <Update />
                        </Route>
                        <Route exact path="/products/:id">
                            <Detail />
                        </Route>
                        <Route exact path="/products">
                            <ProductList />
                        </Route>
                        <Route exact path="/">
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
