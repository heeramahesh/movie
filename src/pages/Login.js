import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useHistory } from 'react-router';

import '../styles/login.css'

const Login=()=>{
    const history = useHistory();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        e.preventDefault()
        if(password==="heera"&&email==="heera@gmail.com")
        {
            history.push('/movies')
        }
        else if(password!=="heera"&&email!=="heera@gmail.com")
        {
            alert("Enter Correct Admin Details")

        }
        else{
          if(password===''||email==='')
          {
              alert("Email or password should not be empty")
          }
          if(email.match(!validRegex)){
                alert("enter valid email address")
          }

        }
    
    }
    return(
        <div className="Login">
 <h1>Login</h1>
 <Form onSubmit={handleSubmit}>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="warning" type="submit" >
    Login
  </Button>
</Form>
</div>
       
    )
}


export default Login
