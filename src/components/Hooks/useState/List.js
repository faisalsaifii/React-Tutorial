// sfc -> Stateless Functional Component
// Props allow reusing data
// Basically like parameters we pass into the jsx elements in the form of props into the functional component
// props needs to be destructured if more than one inputs are taken
// destructuring can also be done inside the () using {}
const List = (/*props*/{list, text, handleDelete}) => {
    // const list = props.list;
    // const text = props.text;
    return ( 
        <div>
            <div>
                {list.map((blog) => ( // Map functions cycles through each element of the list
                // Key helps react in identification of the element
                <div key={blog.id}>
                    <h2>{blog.one}</h2>
                    <p>{blog.two}</p>
                    <button onClick={() => {handleDelete(blog.id)}}>Delete</button>
                </div>
                ))}
            </div>
            {text}
            
        </div>
     );
}
 
export default List;