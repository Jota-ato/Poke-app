import type { PokemonType } from "@/src/schemas";

interface PokemonAboutProps {
    pokemon: PokemonType;
}

export default function PokemonAbout({ pokemon }: PokemonAboutProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">About</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Height</span>
                    <span className="text-xl font-bold">
                        {(pokemon.height / 10).toFixed(1)}
                        <span className="text-sm font-normal text-white/50 ml-1">m</span>
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Weight</span>
                    <span className="text-xl font-bold">
                        {(pokemon.weight / 10).toFixed(1)}
                        <span className="text-sm font-normal text-white/50 ml-1">kg</span>
                    </span>
                </div>
                {pokemon.base_experience !== null && (
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-white/40 uppercase tracking-wider">Base XP</span>
                        <span className="text-xl font-bold">{pokemon.base_experience}</span>
                    </div>
                )}
                {pokemon.species && (
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-white/40 uppercase tracking-wider">Species</span>
                        <span className="text-base font-semibold capitalize">{pokemon.species.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
}