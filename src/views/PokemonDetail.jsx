import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
    const { name } = useParams()
    
    return (
        <div>
            <p>Pokemon name: {name}</p>
        </div>
    );
};

export default PokemonDetail;