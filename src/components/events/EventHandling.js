const EventHandling = () => {
  // A function called through something like onClick is passed with an event
  // e -> Event
  // Event is only passed automatically to the function first called
  // Not the nested function
  // For that we have to state it
  const handleClick = (e) => {
    console.log("The button was clicked\n",e)
  }
  const handleClickWithArgs = (arg, e) => {
    console.log("The button was clicked and the argument was: " + arg, e.target)
  }
  
  return (
    <div>
      <button onClick={handleClick}>Run a defined function</button>
      <button onClick={() => {
        console.log("The button was clicked using an anonymous function")
      }}>
        Run an anonymous function
      </button>
      <button
        onClick={(e) => {// These curly braces are only needed when including multiple statements, not really needed here
          // The function called through an anonymous function as if we were to pass arguments into a function it would be called in the beginning of the prgram
          // For example, handleClick() would be called whenever the component is loaded
          // Since we only want it to run if we click the button we call an anonymous function then through it call our own defined function
          // Passing event into a nested function
          handleClickWithArgs("My Argument",e)
        }}
      >
        Run a function with parameters
      </button>
    </div>
  )
}

export default EventHandling