import React, { useState } from 'react'
import "./Form.css"

const Form = () => {

    const [username, setUserName] = useState("")
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleClick = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
      }


  return (
    <form onSubmit = {handleClick}>
      <label htmlFor='username'> UserName: </label>
      <input 
        type="text"
        id= "username"
        value = {username}
        onChange = {(e) => setUserName(e.target.value)}
       />

       <label htmlFor = "email"> Email: </label>
       <input   
       type ="text"
       id= "email"
       value= {email}
       onChange = {(e) => setEmail(e.target.value)}
        />

        <label htmlFor = "password" > Password: </label>
        <input 
        type ="password"
        id = "password"
        value= {password}
        onChange = {(e)=> setPassword(e.target.value)}
        />

        <button> Submit </button>

    </form>
  )
}

export default Form;
