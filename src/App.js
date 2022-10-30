// React doesn't need to be imported into every react component in v17
import Home from './components/home/Home';
import UseStateHook from './components/Hooks/useState/UseStateHook';
import EventHandling from './components/events/EventHandling';
import './App.css';
import DataBaseEndpoint from './components/DB Endpoints/DbEndpoints';
import UseEffectHook from './components/Hooks/useEffect/UseEffectHook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/nav/NavBar';

// App is a react component that returns JSX
// JSX looks like HTML but isn't
// It has some differences like className instead of class
// className is used because class is a keyword in JS
// Babel converts the used JSX into HTML to be rendered
// Hence, className is also changed to class
// JSX allows direct use of components
// In order to use JS in JSX we use {}

function App() {
  return (
    <div className="App">
      { /* Single Line Comment */}
      {
        // Multi Line Comment
      }
      {/* <DataBaseEndpoint/> */}
      {
        // REACT ROUTERS
        // For NON React Pages
        // The user makes a request and the server returns an HTML page
        // Not in React coz it is a SPA (Single Page Application)
        // Here the DOM takes over
        // Instead of multiple requests to the server, React makes the DOM render components based on the routers 
      }
      <Router>
        {
          // This is outside the switch hence
          // Anything here will always be rendered
        }
        <NavBar/>
        <Switch>
          {
            // The Switch component makes sure that there is only one route being displayed
            // The Program looks for routes inside the switch and renders the one which is matched by the URL
            // Without the switch all the routes will get displayed
          }
          {
            // Routes are rendered from top to bottom
            // React matches the URL with the given path and if some part of it matches
            // It will render that router
            // Example, Without exact attribute "/class" matches "/"
            // Hence exact asks React to match the routes exactly
          }
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/usestatehook">
            <UseStateHook/>
          </Route>
          <Route path="/useeffecthook">
            <UseEffectHook/>
          </Route>
          <Route path="/database">
            <DataBaseEndpoint/>
          </Route>
          <Route path="/eventhandling">
            <EventHandling/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// Exporting the component in order to import and use it in other files
// Everything that is imported from a file is exported from that file
// default allows the app to be imported without {}
export default App;
