import React, {createContext, useState, useEffect} from "react"
import axios from 'axios'
  const ThemeContext = createContext()
  
  function ThemeContextProvider(props){
    const [signIn, setSignIn] = useState([])
  
    function getSignIn(){
      axios.get('/signUp')
      .then(res => setSignIn(res.data))
      .catch(error => console.log(error.response.data.errMsg))
    }
    function addSignIn(newSign){
      axios.post('/signUp', newSign)
      .then(res => {
        setSignIn(prevSign=> [...prevSign, res.data])
      })
      .catch(error => console.log(error)) 
    }
  
    function deleteSignIn(signId ){
      axios.delete(`/signUp/${signId}`)
      .then(res => {
        setSignIn(prevSign => prevSign.filter(sign=>sign._id!==signId))
      })
      .catch(error => console.log(error)) 
    }
  
    function editSignIn(update, bountyId){
      axios.put(`/signUp/${bountyId}`, update)
      .then(res => {
        setSignIn(prevBounty=> prevBounty.map(signIn=>signIn._id !== bountyId ? signIn : res.data))
      })
      .catch(error => console.log(error)) 
    }
  

  
    useEffect(()=>{
      getSignIn()
    },[])
  
    
    return (
      <ThemeContext.Provider value={{signIn, editSignIn, deleteSignIn, addSignIn,}}>
              { props.children }
          </ThemeContext.Provider>
  )
  }
  

  export { ThemeContextProvider, ThemeContext}
  

