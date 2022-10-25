// useEffect hook runs whenver a component is rendered
// Importing useEffect
import { useEffect, useState } from "react";

// Rendering occurs in the start and then whenever the state changes
const UseEffectHook = () => {

    const [name, setName] = useState("Initial Value");
    // Doesn't return a value
    // This would run on every render
    // Takes a function as a parameter which is gonna run whenever there is render
    useEffect(() => {
        console.log("Use Effect Ran")
    });

    // Using useEffect to run only for some re-renders
    // Using useEffect dependencies
    // Using useEffect to only run for whenever the name state changes
    // Using [] will be the same as nothing : Will always run on every render
    // The reason that useEffect is running twice in the console is
    // because of React StrictMode
    useEffect(() => {
        console.log(name)
    },[name])

    return ( 
        <div>
            <h1>Use Effect</h1>
            <h2>{name}</h2>
            <button onClick={() => setName("Changed Value")}>Change Value</button>
        </div>
     );
}
 
export default UseEffectHook;