import React, {createContext, useState, useEffect} from "react"
import Tweets from "./Tweets"
import EditTweets from "./EditTweets"
import axios from 'axios'
  const ThemeContext = createContext()

  function ThemeContextProvider(props){
    const [signIn, setSignIn] = useState([])

    function getSignIn(){
      axios.get('/api/post')
      .then(res => console.log(res.data))
      .catch(error => console.log(error.response.data.errMsg))
    }

    function userSignIn(newSign){
      axios.post('/post', newSign)
      .then(res => {
        setSignIn(prevSign => [...prevSign, res.data])
      })
      .catch(error => console.log(error)) 
    }

    function addPost(newSign){
      axios.post('/post', newSign)
      .then(res => {
       return res.data
      })
      .catch(error => console.log(error)) 
    }
  
    function deleteSignIn(signId ){
      axios.delete(`/user/${signId}`)
      .then(res => {
        setSignIn(prevSign => prevSign.filter(sign=>sign._id!==signId))
      })
      .catch(error => console.log(error)) 
    }
  
    function editSignIn(update, signId){
      axios.put(`/user/${signId}`, update)
      .then(res => {
        setSignIn(prevBounty=> prevBounty.map(signIn=>signIn._id !== signId ? signIn : res.data))
      })
      .catch(error => console.log(error)) 
    }
  

  
    useEffect(()=>{
      getSignIn()
    },[])
  
    
    return (
      <div>
        <ThemeContext.Provider value={{signIn, editSignIn, deleteSignIn, addPost, userSignIn}}>
                { props.children }
        </ThemeContext.Provider>

      </div>
  )
  }
  

  export { ThemeContextProvider, ThemeContext}
  

