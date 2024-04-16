import React, { useState } from 'react';
import md5 from 'md5';

function Search() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);

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
        setComicData(null);

        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

        fetch(url)
        .then(response => response.json())
        .then(result => {
            setCharacterData(result.data);
            console.log(result.data);
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
            {/* Your JSX for the search component */}
        </div>
    );
}

export default Search;