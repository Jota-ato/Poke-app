import { fetchDetailPokemon } from "../lib/actions";
import PokemonHero from "@/src/components/PokemonHero";
import PokemonAbout from "@/src/components/PokemonAbout";
import PokemonAbilities from "@/src/components/PokemonAbilities";
import PokemonStats from "@/src/components/PokemonStats";
import PokemonSprites from "@/src/components/PokemonSprites";

interface DetailPokemonProps {
    params: Promise<{ pokemonName: string }>;
}

export default async function DetailPokemon({ params }: DetailPokemonProps) {
    const { pokemonName } = await params;
    const pokemon = await fetchDetailPokemon(pokemonName);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <PokemonHero pokemon={pokemon} />

            <main className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <PokemonAbout pokemon={pokemon} />
                <PokemonAbilities abilities={pokemon.abilities} />
                <PokemonStats stats={pokemon.stats} />
                <PokemonSprites name={pokemon.name} sprites={pokemon.sprites} />
            </main>

            <footer className="min-h-20" />
        </div>
    );
}