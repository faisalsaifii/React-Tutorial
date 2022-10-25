import { useEffect, useState } from "react"

// Custom Hook must start with the use keyword
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        // Fetching the data from the JSON Server
        // Setting up a timeout so that we can see the loading page
        // This is not needed in a practical field, it is only for educational purposes
        // Obviously, settimout takes a function and calls it after a desired period of time
        // Name of the uri can also be changed
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res)
                    // We saw that whenever the response takes place, the ok property is true
                    // hence we can create a custom condition for whenever it is false
                    if(!res.ok)
                        throw Error('The Request could not be made')
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setIsError(false)
                })
                .catch(e => { // Catching fetch errors
                    console.log(e.message) // To simulate this we can shut down the json server by hitting ctrl+C in terminal
                    setIsError(true)
                    setIsPending(false)
                    setErrorMessage(e.message)
                })
        },1000)//Time in milliseconds
    },[url])
    // Returning an object is better becuase while destructuring the order of the elements won't matter
    return {data,isPending,isError,ErrorMessage};
}
 
export default useFetch;