import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import firebase from '../../firebase/config'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email, password)
      .then((result) => {
        // Signed in 
        console.log('result',result)
        updateProfile(result.user,{displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone
          }).then(()=>{
         history.push('/login')
          })
        })
        // console.log('worked')
        // console.log(firebase)
        // Firebase.firestore().collection('products').get().then((snap)=>{
        //  console.log(snap)
        })
    console.log(username)
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
