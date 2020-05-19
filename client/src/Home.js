import React, {useState } from 'react'
// import {ThemeContext} from "./ThemeContext"

export default function Home(props) {
  const initialInputs={firstName: props.firstName || "",  lastName: props.lastName||''}
  const [inputs, setInputs]=useState(initialInputs)

  function handleChange(e){
    const {name, value}=e.target
    setInputs(prevInputs=> ({...prevInputs,[name]:value}))
  }

  function handleSubmit(e){
     e.preventDefault()
     props.submit(inputs, props._id)
     console.log(inputs)
     setInputs(initialInputs)
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className="container">
      <div className="container2">
      <input name='firstName' value={inputs.firstName} onChange={handleChange} placeholder="First Name" />
      <input name='lastName' value={inputs.lastName} onChange={handleChange} placeholder="Last Name" />
      <button>log in</button>
      </div>
    </form>
  </div>
  )
}

