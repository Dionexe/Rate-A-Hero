import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { CardComponent } from "./Card";
import { fetchMarvelData, generateMarvelUrl } from "./Marvel";

interface CharacterData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Main: React.FC = () => {
  const [url, setUrl] = useState<string>(generateMarvelUrl());
  const [item, setItem] = useState<CharacterData[] | undefined>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchMarvelData(url);
        setItem(results);
      } catch (error) {
        setItem(undefined);
      }
    };
    fetchData();
  }, [url]);

  const searchMarvel = () => {
    setUrl(generateMarvelUrl(search));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchMarvel();
    }
  };

  return (
    <>
      <div className="header">
        <div className="bg"></div>
        <div className="search-bar">
          <img className="Marvel" src="/marvel.jpg" alt="Marvel Logo" />
          <input
            type="search"
            placeholder="Search Here"
            className="search"
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="content">
        {!item ? <p className="Null">Not Found</p> : <CardComponent data={item} />}
      </div>
    </>
  );
};
