import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import MyFavourite from './pages/myFavourite/MyFavourite';
import MyProfile from './pages/myProfile/MyProfile';

import Notifications from './pages/notifications/Notifications';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/myFavourites">
              <MyFavourite />
            </Route>
            <Route path="/myProfile">
              <MyProfile />
            </Route>
            
            <Route path="/settings">
              <Settings />
            </Route>
            
            <Route path="/notifications">
              <Notifications />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;