import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import MyFavourite from './pages/myFavourite/MyFavourite';
import MyProfile from './pages/myProfile/MyProfile';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/termsOfUse/TermsOfUse';
import TakeSurvey from './pages/takeSurvey/TakeSurvey';
import Insights from './pages/insights/Insights';
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
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/privacyPolicy">
              <PrivacyPolicy />
            </Route>
            <Route path="/termsOfUse">
              <TermsOfUse />
            </Route>
            <Route path="/take_survey">
              <TakeSurvey />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/insights">
              <Insights />
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