import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardProps {
  data: {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[] | null; // data can be an array of objects or null
}

export const CardComponent: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();

  if (!data) {
    return <div className="no-data-message">No data available</div>;
  }

  return (
    <>
      {data.map(item => (
        <Card
          key={item.id}
          className="card_container"
          style={{ width: '18rem', cursor: 'pointer' }}
          onClick={() => navigate(`/${item.id}`)}
        >
          <Card.Title className='card-title'>{item.name}</Card.Title>
          <Card.Img
            className="img-fluid"
            variant="top"
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt="Marvel"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Card.Body>
            <Card.Text>
              {item.description ? item.description : 'No description available'}
            </Card.Text>
            <Button className="card-button" variant="primary">Rate & Comment</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};


