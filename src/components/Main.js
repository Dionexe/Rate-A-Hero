import React from "react"
import { Card } from "../Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import md5 from 'md5';
import '../App.css';

export const Main = () => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const timeStamp = new Date().getTime().toString();
  const hash = md5(timeStamp + privateKey + publicKey);

  const [url,setUrl]=useState(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");

  function handleClick() {
    console.log('clicked')
  }
  // useEffect(()=>{
  //   const fetch=async()=>{
  //     const res=await axios.get(url)
  //     setItem(res.data.data.results);
  //   }
  //   fetch();
  // },[url])
  
  // const searchMarvel=()=>{
  //   setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
  // }

  return (
    <div className="Main">
      <button>My Ratings</button>
      <div className="character">
        <img src="https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <h2>Character name</h2>
      </div>
      <div className="rating-box">
        <h2>Rate this Character</h2>
        <div className="stars" onClick={handleClick}>
          <i class='fa-solid fa-star fa-3x'></i>
          <i class='fa-solid fa-star fa-3x'></i>
          <i class='fa-solid fa-star fa-3x'></i>
          <i class='fa-solid fa-star fa-3x'></i>
          <i class='fa-solid fa-star fa-3x'></i>
        </div>
      </div>
      <button>Next Character</button>
    </div>
  );
}

// (
    
//   {/* <div className="header">
//       <div className="bg">
//           <img src="./Images/bg.png" alt="" />
//       </div>
//       <div className="search-bar">
//           <img src="./Images/logo.jpg" alt="logo" />
//           <input type="search" placeholder='Search Here'
//            className='search'
//            onChange={e=>setSearch(e.target.value)}
//            onKeyPress={searchMarvel}/>
//       </div>
//   </div>
//  <div className="content">
   
//   {
//     (!item)?<p>Not Found</p>:<Card data={item}/>
//   }
//  </div> */}
//  <h1>hello world</h1>
// )

