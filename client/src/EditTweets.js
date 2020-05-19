import React, {useState, useContext} from 'react'
import {ThemeContext} from "./ThemeContext"

export default function Tweets(props) {
  const initialInputs={tweets: props.tweets ||'',}
  const [inputs, setInputs]=useState(initialInputs)
  
  const [editToggle, setEditToggle]=useState(false)

  const { editSignIn, deleteSignIn, addSignIn } = useContext(ThemeContext)

  function handleChange(e){
    const {name, value}=e.target
    setInputs(prevInputs=> ({...prevInputs,[name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    addSignIn(inputs, props._id)
    console.log(inputs)
    setInputs(initialInputs)
 }
  
  return (
    <div>
      tweets
      { !editToggle ?
      <>
        <h2>post your tweet {tweets}</h2>
        <form onSubmit={handleSubmit}>
        <input name='tweets' value={inputs.tweets} onChange={handleChange} placeholder="complaint" />
        <button onClick={() => deleteSignIn()}>delete</button>
        <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>edit</button>
        </form>
        
      </>
        :
        <>
          <Tweets
          tweet={...inputs}
          />
          <button  onClick={()=> setEditToggle(prevToggle => !prevToggle)}>close</button>
       </>
      }
    </div>
  )
}
