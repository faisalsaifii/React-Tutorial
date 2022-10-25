function Home() {
  // Using JS to create a constant
  const name = "Home";
  const age = 20;
  const googleLink = "https://www.google.com";
  // We cannot use Booleans / Objects inside JSX
  return (
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
          backgroundColor: '#fff',
          borderRadius: '50px',
          color: '#000',
          padding: '10px',
          textDecoration: 'none',
          paddingBottom: '15px'
        }}
        >Google</a>
      </div>
  )
}

export default Home