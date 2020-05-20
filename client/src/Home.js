import React, {useState, useContext } from 'react'
import {ThemeContext} from "./ThemeContext"

export default function Home(props) {
  const initialInputs={name: props.name|| "", bio: props.bio||'', picture: props.picture||'',}
  const [inputs, setInputs]=useState(initialInputs)
  const { addSignIn } = useContext(ThemeContext)

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
      <input name='name' value={inputs.name} onChange={handleChange} placeholder="Name" />
      <input name='bio' value={inputs.bio} onChange={handleChange} placeholder="bio" />
      <input name='picture' value={inputs.picture} onChange={handleChange} placeholder="img url" />
      <button>log in</button>
    </form>
  </div>
  )
}

