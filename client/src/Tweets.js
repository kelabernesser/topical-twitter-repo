import React, {useState, useContext} from 'react'
import {ThemeContext} from "./ThemeContext"

export default function BountyForm(props) {
  const initialInputs={tweets: props.tweets || ""}
  const [inputs, setInputs]=useState(initialInputs)
  const { editSignIn, deleteSignIn, addSignIn } = useContext(ThemeContext)

  function handleChange(e){
    const {name, value}=e.target
    setInputs(prevInputs=> ({...prevInputs,[name]:value}))
  }

  function handleSubmit(e){
     e.preventDefault()
     console.log(inputs)
     setInputs(initialInputs)
     addSignIn()
  }

  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input name='tweets' value={inputs.tweets} onChange={handleChange} placeholder="complaint" />
        <button>make your complaint</button>
        </div>
      </form>
    </div>
  )
}
