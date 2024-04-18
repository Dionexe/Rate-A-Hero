import React, { useState } from 'react';
import md5 from 'md5';

function Character() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const timeStamp = new Date().getTime().toString();
    const hash = md5(timeStamp + privateKey + publicKey);

    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData(); 
    };

    const getCharacterData = () => {
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
        // Reset form or state if needed
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Search for a hero: </label>
            <input 
            type="text" 
            id="searchInput" 
            value={characterName} 
            onChange={handleChange}/>
            <button type="submit">Search</button>
            </form>

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
