import React, {useState} from "react";
import axios from "axios";
const App=()=>{
  const [data, setData ]=useState({
    username:'',
    email: '',
    password:'',
    confirmPassword:'',
  });
  const {username,email,password,confirmPassword}=data;
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const validateEmail=(email)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email);
  }
  const submitHandler=(i)=>{
      i.preventDefault();
      // console.log(data);
      if(username.length<4){
        alert('username should be minimum 4 characters');
      }
      else if(!validateEmail(email)){
        alert('email id is not correct format');
      }
      else if(password.length<8){
        alert('password should be mimimum 8 characters');
      }
      else if(password != confirmPassword){
        alert('password does not matches to confirm password');
      }
      else{
        console.log(data);
      }
      axios.post('https://register-20485-default-rtdb.firebaseio.com/Register.json',data).then(()=>alert('submitted successfully'));
  }

  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>User Name:</label><br/>
  <input type="text" name="username" placeholder="Enter your user name" value={username} onChange={changeHandler} required/><br/>
  <label>Email:</label><br/>
  <input type="email" name="email" placeholder="Enter your mail id" value={email} onChange={changeHandler} required/><br/>
  <label>Password:</label><br/>
  <input type="password" name="password" placeholder="Enter your password" value={password} onChange={changeHandler} required/><br/>
  <label>confirm Password:</label><br/>
  <input type="password" name="confirmPassword" placeholder="Re-Enter your password" value={confirmPassword} onChange={changeHandler} required/><br/>
  <button type="submit">Submit</button>
        </form>
      </center>

    </div>
  );
}
export default App;