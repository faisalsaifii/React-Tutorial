// React doesn't need to be imported into every react component in v17
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import './App.css';

// App is a react component that returns JSX
// JSX looks like HTML but isn't
// It has some differences like className instead of class
// className is used because class is a keyword in JS
// Babel converts the used JSX into HTML to be rendered
// Hence, className is also changed to class
// JSX allows direct use of components
// In order to use JS in JSX we use {}

function App() {
  // Using JS to create a constant
  const name = "Faisal";
  const age = 20;
  const googleLink = "https://www.google.com";
  // We cannot use Booleans / Objects inside JSX
  return (
    <div className="App">
      { /* Single Line Comment */}
      {
        // Multi Line Comment
      }
      <Navbar/>
      <Home/>
      <div className='content'>
        <h1>
          {
            name // Using the constant created in JS
          }
        </h1>
        <p>
          My age is {age}
        </p>
        <p>
          10 + 2 = {10+2}
        </p>
        <p>
          This is actually a list: {[1,2,3]}
        </p>
        <p>
          Random Number: {Math.floor(Math.random()*11)}
        </p>
        <a href={googleLink}
        style={/*First block is for allowing dynamic code, the second one is the block of the CSS code*/{
          //Inline Styling
          // Use camel case instead of -
          backgroundColor: '#000000',
          borderRadius: '50px',
          color: '#ffffff',
          padding: '10px',
          textDecoration: 'none',
          paddingBottom: '15px'
        }}
        >Google</a>
      </div>
    </div>
  );
}
// Exporting the component in order to import and use it in other files
// Everything that is imported from a file is exported from that file
export default App;
