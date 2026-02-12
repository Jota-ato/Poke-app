'use server'

import { pokemonResponseSchema, detailPokemonSchema } from "@/src/schemas";
import { notFound } from 'next/navigation';
import type { PokemonType } from "@/src/schemas";

const base_url = 'https://pokeapi.co/api/v2';

export async function fetchPokemons(offset: number = 0) {
    const url = new URL(`${base_url}/pokemon`);
    url.searchParams.append('limit', '21');
    url.searchParams.append('offset', String(offset));
    try {
        const response = await fetch(url);
        const data = await response.json();
        const result = pokemonResponseSchema.safeParse(data);

        if (!result.success) {
            throw new Error(`Validation failed: ${JSON.stringify(result.error)}`);
        }
        const detailInfo = await fetchCardDetailPokemons(result.data.results);
        return {
            pokemons: detailInfo,
            hasNext: !!result.data.next,
            hasPrev: !!result.data.previous,
            total: result.data.count,
        };
    } catch (err) {
        throw new Error(`${err}`)
    }
}

export async function fetchCardDetailPokemons(pokemons: { name: string, url: string }[]) {
    try {
        const pokemonList = Promise.all(
            pokemons.map(async pokemon => {
                return await fetchDetailPokemon(pokemon.name)
            })
        )
        return pokemonList;
    } catch (err) {
        throw new Error(`${err}`)
    }
}

export async function fetchDetailPokemon(name: string): Promise<PokemonType> {
    const url = `${base_url}/pokemon/${name}`
    const res = await fetch(url);

    if (!res.ok) {
        console.log(res)
        if (res.status === 404) notFound();
        throw new Error(`Failed to fetch Pokemon: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const result = detailPokemonSchema.safeParse(data);
    if (!result.success)
        throw new Error(`${result.error}`);
    return result.data;
}