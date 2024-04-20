import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'; 

export const CardComponent = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
            <Card 
              key={item.id}
              className="card_container" 
              style={{ width: '18rem', cursor: 'pointer' }} 
              onClick={() => navigate(`/${item.id}`)}
            >
              <Card.Title className='card-title'>{item.name}</Card.Title>
              <Card.Img className="img-fluid" variant="top" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Marvel" style={{ maxWidth: '100%', height: 'auto' }}/>
              <Card.Body>
                <Card.Text>
                {item.description ? item.description : 'No description available'}
                </Card.Text>
                <Button className="card-button" variant="primary">Rate & Comment</Button>
              </Card.Body>
            </Card>
          )}
          )
            
        ) : ""
      }
    </>
  );
};