// create your App component here
import React, {useEffect, useState} from "react";

function App() {

const [dogImg, setDogImg] = useState(null)

const apiURL = "https://dog.ceo/api/breeds/image/random"

useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => handleDogImg(data))
}, [])

function handleDogImg(data) {
    setDogImg(data.message)
}

    return <div>
        <p style={{display:dogImg ? 'none' : 'block'}}>Loading...</p>
        <img src={dogImg} alt="A Random Dog"></img>
    </div>
}


export default App