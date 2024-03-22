'use client'

import { useEffect, useState } from 'react';

export default function PokemonList() {
    interface pokemon {
        name : String,
        url : string
    }

    const [apiData, setApiData] = useState<pokemon[]>([]);
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

    const fetchApi = async() => {
        try {
            const response = await fetch(apiUrl);
            const data = response.json;

            const responseData : { results: pokemon[] } = await response.json();

            if (responseData.results) {
                setApiData(responseData.results);
            }
        } catch (error) {
            console.error('Error:\n  > ', error);
        }
    }
    useEffect(() => {
      fetchApi();
    }, [])
    
    const showData = () => {
        return apiData.map((item, index) => (
            <div key={index}>
                <p>_________</p>
                <br />
                <p>Pokemon name : {item.name}</p>
                <button>Details</button>
                <p>URL: {item.url}</p>
                <br />
            </div>
        ));
    };

    if (apiData.length === 0) {
        return (
            <>
                <div>Loading ...</div>
            </>
        )
    }

    return (
        <>
            <div>
                <h2>List of pokemons :</h2>
                <br />
                {showData()}
                
            </div>
        </>
    )
}
