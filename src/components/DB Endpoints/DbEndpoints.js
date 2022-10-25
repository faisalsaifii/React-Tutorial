import useFetch from "../Hooks/Custom Hook/useFetch";
import LoadingPage from "./LoadingPage";

const DataBaseEndpoint = () => {
    // Using a custom hook
    const {data,isError,isPending,ErrorMessage} = useFetch('http://localhost:8000/data');
    return ( 
        <div>
            {
                // Conditional Rendering
                // And Logical Operator -> Both have to be true,
                // if first is false then second won't get executed
                // if first is true then only second will get rendered
                // You can go into inspect -> network -> throttling to see whether it shows or not
            }
            {isError && <div><h1>{ErrorMessage}</h1></div>}
            {isPending && <LoadingPage/>}
            <div>
                {data.map((data) => (
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default DataBaseEndpoint;