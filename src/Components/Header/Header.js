import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
  const handleClick = () => {
    user
      ? history.push('/create')   // Redirect to /create if logged in
      : history.push('/login');    // Redirect to /login if not logged in
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `welcome ${user.displayName}`:<span onClick={()=>{history.push('/login')}}>Login</span>}</span>
          <hr />
        </div>
         {user && <span onClick={()=>{

           firebase.auth().signOut();
           history.push('/login')
         }
         }>Logout</span> } 


        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={
              handleClick
            }>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
