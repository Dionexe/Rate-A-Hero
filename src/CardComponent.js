import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardComponent = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      {
        (data) ? (
          data.map(item => (
            <Card 
              key={item.id}
              className="card_container" // Add Bootstrap classes for styling
              style={{ width: '18rem', cursor: 'pointer' }} // Adjust card style
              onClick={() => navigate(`/${item.id}`)}
            >
              <Card.Title className='card-title'>{item.name}</Card.Title>
              <Card.Img className="img-fluid" variant="top" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Marvel" style={{ maxWidth: '100%', height: 'auto' }}/>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Return to Main</Button>
              </Card.Body>
            </Card>
          ))
        ) : ""
      }
    </>
  );
};
