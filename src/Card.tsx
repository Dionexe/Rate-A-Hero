import React from 'react';

interface CharacterData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CardComponentProps {
  data: CharacterData[];
}

export const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((character) => (
        <div key={character.id} className="card">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <div className="card-content">
            <h2>{character.name}</h2>
            <p>{character.description || 'Description not available.'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

