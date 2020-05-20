import React, {useState, useContext} from 'react'
import Tweets from "./Tweets"
import {ThemeContext} from "./ThemeContext"

export default function EditTweets(props) {
  const {tweet}=props
  
  const [editToggle, setEditToggle]=useState(false)

  const { editSignIn, deleteSignIn, addSignIn } = useContext(ThemeContext)

  
  return (
    <div>
      { !editToggle ?
      <>
           <h3>{tweet}</h3>
        <button onClick={() => deleteSignIn()}>delete</button>
        <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>edit</button>
      </>
        :
        <>
          <Tweets
          tweet={tweet}
          />
          <button  onClick={()=> setEditToggle(prevToggle => !prevToggle)}>close</button>
       </>
      }
    </div>
  )
}
