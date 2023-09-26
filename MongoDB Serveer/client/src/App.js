import React from 'react'
import Axios from "axios";

function App() {
  let data = {
    name: "Vicky",
    age: 20,
    email: "lalatendubhatta@gmail.com",
    countryCode: "+91",
    mobile: "9692658714",
    Hobbies: ["cricket", "badminton", "coding"]
  }
  // async function post() {
  //   console.log("hello");
  //   let res = await fetch(" http://127.0.0.3:5555/post", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data)
  //   }).then(data => data.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }
  async function post() {
    let res = await Axios.post(" http://127.0.0.3:5555/post", data)
    console.log(res.data);
  }
  return (
    <div>
      <h1>MY SERVER</h1>
      <button onClick={post}>CLICK TO POST</button>
    </div>
  )
}

export default App