import React from "react"
import { CardComponent } from "./CardComponent"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import md5 from 'md5';

export const Main = () => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const timeStamp = new Date().getTime().toString();
  const hash = md5(timeStamp + privateKey + publicKey);

  const [url,setUrl]=useState(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
  }

  return (
    <>
        <div className="header">
            <div className="bg">
            </div>
            <div className="search-bar">
                <img className="Marvel" src="/marvel.jpg" alt="Marvel Logo" />
                <input
                    type="search"
                    placeholder="Search Here"
                    className="search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        searchMarvel();
                      }
                    }}
                 />
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<CardComponent data={item}/>
        }
       </div>
    </>
  )
}