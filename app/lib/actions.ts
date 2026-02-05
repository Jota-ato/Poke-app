'use server'

import { pokemonResponseSchema, detailPokemonSchema } from "@/src/schemas";
const base_url = 'https://pokeapi.co/api/v2/';

export async function fetchPokemons() {
    const url = new URL(`${base_url}/pokemon`);
    url.searchParams.append('limit', '20');
    try {
        const response = await fetch(url);
        const data = await response.json();
        const result = pokemonResponseSchema.safeParse(data);
        
        if (!result.success) {
            throw new Error(`Validation failed: ${JSON.stringify(result.error)}`);
        }
        const detailInfo = await fetchDetailPokemons(result.data.results);
        return detailInfo;
    } catch (err) {
        throw new Error(`${err}`)
    }
}

export async function fetchDetailPokemons(pokemons: {name: string, url: string}[]) {
    try {
        const pokemonList = Promise.all(
            pokemons.map(async pokemon => {
                const res = await fetch(pokemon.url);
                const data = await res.json();

                const result = detailPokemonSchema.safeParse(data);
                if (!result.success)
                    throw new Error(`${result.error}`);
                const { abilities, sprites, types } = result.data;
                return { abilities, sprites, types, name: pokemon.name };
            })
        )
        return pokemonList;
    } catch (err) {
        throw new Error(`${err}`)
    }
}