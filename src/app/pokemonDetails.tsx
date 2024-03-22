"use client"

import React, { useEffect, useState } from "react";

interface apiProps {
    pokemonUrl : string
}
interface pokemonDetails {
    name : string,
    image : string,
    height : number,
    weight : number,
    types : String,
    order : number
}    
    
    /*
    sprites.front_default
Nom : name
Taille : height
Poids : weight
Types : types
Numéro : order
*/


const PokemonDetails : React.FC<apiProps> = ({pokemonUrl}) => {
    const [apiData, setApiData] = useState<pokemonDetails[]>([]);

    const fetchApi = async() => {
        try {
            const response = await fetch(pokemonUrl);
            const responseData = await response.json();

            if (responseData) {
                const data : pokemonDetails[] = responseData.map((item: any) =>({
                    name: item.name,
                    image: item.sprites.front_default,
                    height: item.height,
                    weight: item.weight,
                    types: item.types.type.name,
                    order: item.order
                }))
                setApiData(data);
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
                <p>image url : {item.image}</p>
                <p>height : {item.height}</p>
                <p>weight : {item.weight}</p>
                <p>types : {item.types}</p>
                <p>order : {item.order}</p>
                <br />
            </div>
        ));
    };

    return (
       <>
            <div>
                <h3>Details :</h3>
                <br />
                {showData()}
            </div>
       </>
    )
}

export default PokemonDetails;