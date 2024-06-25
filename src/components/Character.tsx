import React, { useState, ChangeEvent, FormEvent } from 'react';
import md5 from 'md5';

function Search() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState<any[] | null>(null);
    const [filteredData, setFilteredData] = useState<any[] | null>(null);

    const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';
    const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';
    const timeStamp = new Date().getTime().toString();
    const hash = md5(timeStamp + privateKey + publicKey);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getCharacterData(characterName);
    };

    const getCharacterData = (characterName: string) => {
        setCharacterData(null);

        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${characterName}`;

        fetch(url)
        .then(response => response.json())
        .then(result => {
            setCharacterData(result.data.results);
            setFilteredData(result.data.results); // Initially, set filteredData to characterData
            console.log(result.data.results);
        })
        .catch(() => {
            console.log('ERROR GETTING CHARACTER DATA');
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharacterName(event.target.value);
    };

    const handleReset = () => {
        setCharacterName('');
        setCharacterData(null);
        setFilteredData(null);
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
                    <h2>Filtered Results:</h2>
                    <ul>
                        {filteredData.map((character: any) => ( // Adjust 'any' to a more specific type if possible
                            <li key={character.id}>{character.name}</li>
                            // You can display other information about the character here
                        ))}
                    </ul>
                </div>
            )}
            {characterData && (
                <div>
                    <h2>All Results:</h2>
                    <ul>
                        {characterData.map((character: any) => ( // Adjust 'any' to a more specific type if possible
                            <li key={character.id}>{character.name}</li>
                            // You can display other information about the character here
                        ))}
                    </ul>
                </div>
            )}
            {!characterData && <p>No Results Found</p>}
        </div>
    );
}

export default Search;
