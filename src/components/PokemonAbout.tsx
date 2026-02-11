import type { PokemonType } from "@/src/schemas";

interface PokemonAboutProps {
    pokemon: PokemonType;
}

export default function PokemonAbout({ pokemon }: PokemonAboutProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">About</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Height</span>
                    <span className="text-xl font-bold text-gray-800">
                        {(pokemon.height / 10).toFixed(1)}
                        <span className="text-sm font-normal text-gray-400 ml-1">m</span>
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Weight</span>
                    <span className="text-xl font-bold text-gray-800">
                        {(pokemon.weight / 10).toFixed(1)}
                        <span className="text-sm font-normal text-gray-400 ml-1">kg</span>
                    </span>
                </div>
                {pokemon.base_experience !== null && (
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Base XP</span>
                        <span className="text-xl font-bold text-gray-800">{pokemon.base_experience}</span>
                    </div>
                )}
                {pokemon.species && (
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Species</span>
                        <span className="text-base font-semibold capitalize text-gray-800">{pokemon.species.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
}