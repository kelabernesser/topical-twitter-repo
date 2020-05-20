import React, {useState, useContext} from 'react'
import Tweets from "./Tweets"
import {ThemeContext} from "./ThemeContext"

export default function EditTweets(props) {
  const {tweet, _id}=props
  
  const [editToggle, setEditToggle]=useState(false)

  const { editSignIn, deleteSignIn,} = useContext(ThemeContext)

  
  return (
    <div>
      { !editToggle ?
      <>
           <h3>{tweet}</h3>
        <button onClick={() => deleteSignIn(_id)}>delete</button>
        <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>edit</button>
      </>
        :
        <>
          <Tweets
          tweet={tweet} key={_id}
          />
          <button  onClick={()=> setEditToggle(prevToggle => !prevToggle)}>close</button>
       </>
      }
    </div>
  )
}
