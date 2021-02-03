import './App.css';
import { Route, Switch } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage/index';
import ProfilePage from './pages/ProfilePage/index';
import ProjectsPage from './pages/ProjectsPage/index';
import ProjectShowPage from './pages/ProjectShowPage/index';
import MediaPage from './pages/MediaPage/index';

// Components
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/project" component={ProjectShowPage} />
        <Route path="/media" component={MediaPage} />
      </Switch>
      <Header />
    </div>
  );
}

export default App;
