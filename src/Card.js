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
              className="mb-3" // Add Bootstrap classes for styling
              style={{ width: '18rem', cursor: 'pointer' }} // Adjust card style
              onClick={() => navigate(`/${item.id}`)}
            >
              <Card.Img variant="top" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
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
