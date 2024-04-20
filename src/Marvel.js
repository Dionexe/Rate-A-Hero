import React from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import md5 from 'md5';
import './App.css'; 

export const Marvel = () => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const timeStamp = new Date().getTime().toString();
  const hash = md5(timeStamp + privateKey + publicKey);
  const {id}=useParams();
  const [item,setItem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    <>
    {
      (!item)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
            <Link className='show-link' to="/">Back to Main Page</Link>
          </div>
        </div>
      )
    }
    </>
  )
}