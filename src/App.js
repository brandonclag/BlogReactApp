import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import TimePage from './pages/TimePage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/time" component={TimePage} />
        </div>
      </div>
    </Router >
  );
}

export default App;
