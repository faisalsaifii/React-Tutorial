import React , {useState} from 'react'
import List from './List'

function UseStateHook() {
  // use State Hook
  // Allows the re-rednering of an element in JSX whenever it's state is changed
  const [name, setName] = useState('Initial')
  // Destructuring of the hook
  // First is the variable that has the value 'initial'
  // Second is the function that changes the state of the variable whenever called
  const [count, setCount] = useState(0);
  // If we change the variable without changing its state, the value will change but it won't reflect in the HTML file

  // Outputting a list
  // The list has 3 elements each object contains three sub data each
  const [list,setList] = useState([
    {title : "My Title",one : "HAHAHAHA", two: "Two", id : 1},
    {title : "Your Title",one : "hehehehe", two: "Two", id : 2},
    {title : "Our Title",one : "SIUUUUUU", two: "Two", id : 3},
  ]);

  const handleDelete = (id) => {
    const newList = list.filter(l => l.id !== id);
    setList(newList);
  }

  return (
    <div>
    <button onClick={()=> {
      setName("Changed")
      setCount(count+1)
    }}>
      {name}
    </button>
    <p>
      The button was clicked {count} times.
    </p>
    <List 
      list = {list} 
      text = "This is just some text"
      handleDelete = {handleDelete}
    />
    {/* Reusing a component */}
    {/* The filter method doesn't mutate the list, it only returns the value */}
    <List 
      list = {list.filter(
        (list) => list.one === "SIUUUUUU"
      )} 
      text = "Reusing the same component"
    />
  </div>
  )
}

export default UseStateHook