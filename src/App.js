// React doesn't need to be imported into every react component in v17
// import Home from './components/home/Home';
// import UseStateHook from './components/Hooks/useState/UseStateHook';
// import Navbar from './components/events/EventHandling';
import './App.css';
import UseEffectHook from './components/Hooks/useEffect/UseEffectHook';

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
      {/* Components : Uncomment whichever component you want to see */}
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <UseStateHook/> */}
      <UseEffectHook/>
    </div>
  );
}
// Exporting the component in order to import and use it in other files
// Everything that is imported from a file is exported from that file
// default allows the app to be imported without {}
export default App;
