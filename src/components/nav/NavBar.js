import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
                <h1>React Tutorial</h1>
                
                {
                    // Normal anchor links make requests to the server for every HTML page
                    // This is really slow
                    // To use the built router dom we must use the Link Tag
                }
                <Link to="/">Home</Link>
                <Link to="/usestatehook">Use State Hook</Link>
                <Link to="/useeffecthook">Use Effect Hook</Link>
                <Link to="/database">DataBase</Link>
                <Link to="/eventhandling">Event Handling</Link>
        </div>
    );
}
 
export default NavBar;