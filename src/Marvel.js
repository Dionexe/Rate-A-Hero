import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import { Button, Card } from 'react-bootstrap';
import './css/styles.css';

export const Marvel = () => {
  const navigate = useNavigate();
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const timeStamp = new Date().getTime().toString();
  const hash = md5(timeStamp + privateKey + publicKey);
  const { id } = useParams(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
        setItem(res.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, []);

  const handleReturnButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      {item ? (
        <div className="box-content">
           <h1 className='card-title'>{item.name}</h1>
          <Card style={{ width: '75vw', height: '80vh' }}>
          <Card.Img variant="top" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} style={{ maxWidth: '100%', height: '75%' }} />
            <Card.Body>
            <Card.Text>
                <h4>{item.description}</h4>
             </Card.Text>
              <Button className='show-button' onClick={handleReturnButtonClick}>Back to Main Page</Button>
            </Card.Body>
          </Card>
          <div className="comment-section">
            <h1>Share your comments:</h1>
          </div>
        </div>
     
      ) : null}
    </>
  );
};