// Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import CategoryPage from './Pages/CategoryPage';

// Pages
import Main from './Pages/Main';
import SinglePost from './Pages/SinglePost';
import Upload from './Pages/Upload';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/upload'>
            <Upload />
          </Route>
          <Route path='/post/:id'>
            <SinglePost />
          </Route>
          <Route path='/:type'>
            <CategoryPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
