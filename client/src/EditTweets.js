import React, {useState, useContext} from 'react'
import Tweets from "./Tweets"
import {ThemeContext} from "./ThemeContext"

export default function EditTweets(props) {
  const {tweets, _id}=props
  
  const [editToggle, setEditToggle]=useState(false)

  const { editSignIn, deleteSignIn,} = useContext(ThemeContext)

  
  return (
    <div>
      { !editToggle ?
      <>
           <h3>{tweets}</h3>
        <button onClick={() => deleteSignIn(_id)}>delete</button>
        <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>edit</button>
      </>
        :
        <>
          <Tweets
          tweets={tweets}
           key={_id}
           submit={editSignIn}
          />
          <button  onClick={()=> setEditToggle(prevToggle => !prevToggle)}>close</button>
       </>
      }
    </div>
  )
}
