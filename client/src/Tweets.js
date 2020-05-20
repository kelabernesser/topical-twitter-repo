import React, {useState, useContext} from 'react'
import EditTweets from "./EditTweets"
import {ThemeContext} from "./ThemeContext"
import Tweets from './EditTweets'

export default function Form(props) {
  const { addPost } = useContext(ThemeContext)

  const initialInputs={tweet:props.tweet || "",}
  const [inputs, setInputs]=useState([])
  const [input, setInput]=useState(initialInputs)


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
  
  const mappedInput=inputs.map(function(newIn){
    return <EditTweets tweet={newIn.tweet} key={props._id}/>
  })

  return (
    <div>
      <p>post your tweet</p>
      <form onSubmit={handleSubmit}>
      <input name='tweet' value={inputs.tweet} onChange={handleChange} placeholder="tweet" />
      <button>new tweet</button>
      </form>
      {mappedInput}
    </div>
  )
}
