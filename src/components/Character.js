import React, { useState } from 'react';
import md5 from 'md5';

function Character() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const timeStamp = new Date().getTime().toString();
    const hash = md5(timeStamp + privateKey + publicKey);

    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData(characterName);
    };

    const getCharacterData = (characterName) => {
        setCharacterData(null);

        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

        fetch(url)
        .then(response => response.json())
        .then(result => {
            setCharacterData(result.data.results);
            console.log(result.data.results);
        })
        .catch(() => {
            console.log('ERROR GETTING CHARACTER DATA');
        });
    };

    const handleChange = (event) => {
        setCharacterName(event.target.value);
    };

    const handleReset = () => {
        setCharacterName('');
        setCharacterData(null);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={characterName} onChange={handleChange} />
                <button type="submit">Search</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
            {filteredData && (
                <div>
                <h2>Character Results:</h2>
                <ul>
                    {characterData.map(character => (
                        <li key={character.id}>{character.name}</li>
                    ))}
                </ul>
            </div>
            )}
            {characterData && (
                <div>
                <h2>Character Results:</h2>
                <ul>
                    {characterData.map(character => (
                        <li key={character.id}>{character.name}</li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
}

export default Character;
