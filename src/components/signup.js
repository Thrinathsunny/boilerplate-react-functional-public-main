import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navigate= useNavigate()
    
    const [signupData, setSignupData] = useState({ name: "", email: "",gender:"male" ,phonenumber: "",password:"" })
    const handleInputs =(e)=>{
        e.preventDefault() ;
       if(signupData.name.length<=0){
        alert("name cannot be empty")
       }else if(signupData.email.length<=0){
        alert("email cannot be empty")
       }else if(signupData.gender.length<=0){
        alert("gender cannnot be empty")
       }else if(signupData.phonenumber.length>10||signupData.phonenumber.length<10){
        alert("invalid phonenumber")
       }else if(signupData.password.length<=0){
        alert("password cannot be empty")
       }else{
        localStorage.setItem('userid', signupData.email)
    console.log(signupData)
    navigate("/done")
       }
    }
  return (
    <div>
        <form onSubmit={handleInputs}>
            <input type="text" placeholder='name'  onChange={(e)=>{setSignupData({...signupData,name:e.target.value})}}/><br/>
            <input type="email" placeholder="email" onChange={(e)=>{setSignupData({...signupData, email:e.target.value})}}/><br/>
            <select  onChange={(e)=>{setSignupData({...signupData,gender:e.target.value})}}>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select><br/>
            <input type="number" placeholder ="phonenumber"  onChange={(e)=>{setSignupData({...signupData,phonenumber:e.target.value})}} /><br/>
            <input type="password" placeholder ="password"  onChange={(e)=>{setSignupData({...signupData,password:e.target.value})}}/><br/>
            <button type ="submit" handleInputs> submit</button>
        </form>
      



    </div>
  )
}

export default Signup