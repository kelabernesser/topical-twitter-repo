import React, {useState, useContext} from 'react'
import EditTweets from "./EditTweets"
import {ThemeContext} from "./ThemeContext"

export default function Form(props) {
  const { addPost } = useContext(ThemeContext)

  const [input, setInput]=useState({tweet:props.tweet || ""},)
  const [inputs, setInputs]=useState([])

  function handleChange(e){
    const {name, value}=e.target
    setInput(prevInputs=> ({...prevInputs,[name]:value}))
  }
  
  function handleSubmit(e){
    e.preventDefault()
    addPost(inputs, props._id)
    console.log(inputs)
    setInputs(prevInputs=> [...prevInputs, input])
  }
console.log(inputs)
  
  const mappedInputs=inputs.map(tweets => <EditTweets tweets={tweets} key={tweets._id} />)
  
  return (
    <div className="container3">
      <br></br>
      <p className="par">post your tweet</p>
      <form onSubmit={handleSubmit}>
      <input name='tweet' value={inputs.tweet} onChange={handleChange} placeholder="tweet" />
      <button>new tweet</button>
      </form>
      {mappedInputs}
    </div>
  )
}
