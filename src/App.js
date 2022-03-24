import './App.css';
import { Route, Switch } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage/index';
import ProfilePage from './pages/ProfilePage/index';
import ProjectsPage from './pages/ProjectsPage/index';
import ProjectShowPage from './pages/ProjectShowPage/index';
import MediaPage from './pages/MediaPage/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/media" component={MediaPage} />

        <Route exact path={"/:heading"} component={ProjectShowPage} />
      </Switch>
    </div>
  );
}

export default App;
