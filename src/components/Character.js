import React, { useState } from 'react';
import md5 from 'md5';
const mongoose = require('mongoose');
require('dotenv').config();

function Character() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const timeStamp = new Date().getTime().toString();
    const hash = md5(timeStamp + privateKey + publicKey);

    const mongoURI = process.env.MONGODB_URI;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     getCharacterData(); 
    // };

    const getCharacterData = async () => {
        setCharacterData(null);

        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&name=${searchInput}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.data.results.length > 0) {
                setCharacterName(data.data.results[0]);
            } else {
                setCharacterName(null);
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        // fetch(url)
        // .then(response => response.json())
        // .then(result => {
        //     setCharacterData(result.data.results);
        //     console.log(result.data.results);
        // })
        // .catch(() => {
        //     console.log('ERROR GETTING CHARACTER DATA');
        // });
    };

    return (
        <div>
            <input 
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
                placeholder='Enter character name'
            />
            <button onClick={getCharacterData}>Search</button>
            {Character && (
                <div>
                    <h2>{characterName}</h2>
                    {Character.description && <p>{Character.description}</p>}
                    {Character.thumbnail && (
                        <img src={`${Character.thumbnail.path}.${Character.thumbnail.extension}`} alt={Character.name} />
                    )}
                </div>
            )}
            {Character === null && <p>No Results Found</p>}
        </div>
        // <div>
        //     <form onSubmit={handleSubmit}>
        //     <label htmlFor="searchInput">Search for a hero:</label>
        //     <input 
        //     type="text" 
        //     id="searchInput" 
        //     value={characterName} 
        //     onChange={handleChange}/>
        //     <button type="submit">Search</button>
        //     </form>

        //     {characterData && (
        //         <div>
        //             <h2>Character Results:</h2>
        //             <ul>
        //                 {characterData.map(character => (
        //                     <li key={character.id}>{character.name}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     )}
        // </div>
    );
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

export default Character;
