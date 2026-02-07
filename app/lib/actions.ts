'use server'

import { pokemonResponseSchema, detailPokemonSchema } from "@/src/schemas";
import { notFound } from 'next/navigation';

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
        const detailInfo = await fetchCardDetailPokemons(result.data.results);
        return detailInfo;
    } catch (err) {
        throw new Error(`${err}`)
    }
}

export async function fetchCardDetailPokemons(pokemons: { name: string, url: string }[]) {
    try {
        const pokemonList = Promise.all(
            pokemons.map(async pokemon => {
                const { sprites, types, name } = await fetchDetailPokemon(pokemon.name);
                return { sprites, types, name }
            })
        )
        return pokemonList;
    } catch (err) {
        throw new Error(`${err}`)
    }
}

export async function fetchDetailPokemon(name: string) {
    const url = `${base_url}/pokemon/${name}`
    const res = await fetch(url);

    if (!res.ok) {
        if (res.status === 404) notFound();
        throw new Error(`Failed to fetch Pokemon: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const result = detailPokemonSchema.safeParse(data);
    if (!result.success)
        throw new Error(`${result.error}`);
    return result.data;
}