import React, {useState, useContext } from 'react'
import Profile from "./Profile"
import {ThemeContext} from "./ThemeContext"

export default function Home(props) {
  const initialInputs={firstName: props.firstName || '',  bio: props.bio || '', picture: props.picture ||'', }
  const [inputs, setInputs]=useState(initialInputs)
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
    <form onSubmit={handleSubmit} className="container">
      <div className="container2">
      <input name='firstName' value={inputs.firstName} onChange={handleChange} placeholder="Name" />
      <input name='bio' value={inputs.bio} onChange={handleChange} placeholder="breif description of yourself"/>
      <input name='picture' value={inputs.picture} onChange={handleChange} placeholder="picture url" />
      <button>join</button>
      </div>
    </form>
  </div>
  )
}

