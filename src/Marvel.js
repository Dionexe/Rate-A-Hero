import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import md5 from 'md5';
import { Button, Card } from 'react-bootstrap';
import './App.css';

export const Marvel = () => {
  const navigate = useNavigate();
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

  const handleReturnButtonClick = () => {
    navigate('/');

  return (
      <>
    {item ? (
      <div className="box-content">
        <Card style={{ width: '75vw', height: '80vh' }}>
          <Card.Img variant="top" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
            <Button className='show-button' onClick={handleReturnButtonClick}>Back to Main Page</Button>
          </div>
        </Card>
      </div>
    ) : null}
      </>
    );
  }
}