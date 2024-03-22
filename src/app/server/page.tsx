import PokemonDetails from "../pokemonDetails";

export default function Server() {
    return (
        <>
            <h2>--- Server Page ---</h2>
            <br />
            <PokemonDetails pokemonUrl="https://pokeapi.co/api/v2/pokemon/50/"/> 
        </>
    )
}