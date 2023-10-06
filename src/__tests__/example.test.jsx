import { render, screen } from "@testing-library/react";
import SearchInput from "../components/SearchInput";
import PokemonList from "../components/PokemonList";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


//test to check that on the search input the button (img) is rendered
test("check the button is rendered", () => {
    render(
        <Router>
            <SearchInput />
        </Router>
    );
    const button = screen.getByRole("img")

    expect(button).toBeInTheDocument();
})

//test to check if PokemonList is render with an array of 4 pokemon
test("check PokemonList component is rendered with an array of 4 pokemon ", () => {
    const pokemonArr = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"];
       render(
         <Router>
           <PokemonList pokemonList={pokemonArr}></PokemonList>
         </Router>
       );
    
    //takes all the texts elements and find if includes the pokemon name
    const result = screen.getAllByText(elem => {
        return pokemonArr.includes(elem)
    });

    expect(result).toHaveLength(pokemonArr.length);
})