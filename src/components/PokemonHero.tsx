import Image from "next/image";
import TypeBadge from "./TypeBadge";
import pokemonTypes from "@/src/pokemonTypes/types";
import type { PokemonType } from "@/src/schemas";

interface PokemonHeroProps {
    pokemon: PokemonType;
}

export default function PokemonHero({ pokemon }: PokemonHeroProps) {
    const primaryType = pokemon.types[0].type.name;
    const typeColor = pokemonTypes[primaryType]?.color ?? "bg-pokemon-normal";
    const officialArt = pokemon.sprites.other["official-artwork"].front_default;

    return (
        <header className={`relative overflow-hidden ${typeColor}`}>
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 pt-10 pb-0 flex flex-col sm:flex-row items-end justify-between gap-4">
                {/* Name + types */}
                <div className="pb-8 z-10">
                    <p className="text-white/60 text-sm font-mono tracking-widest mb-1">
                        #{String(pokemon.id).padStart(3, "0")}
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-black capitalize tracking-tight drop-shadow-lg">
                        {pokemon.name}
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {pokemon.types.map((t) => (
                            <TypeBadge key={t.type.url} name={t.type.name} />
                        ))}
                    </div>
                </div>

                {/* Official artwork */}
                {officialArt && (
                    <div className="relative shrink-0 drop-shadow-2xl">
                        <Image
                            src={officialArt}
                            alt={pokemon.name}
                            width={220}
                            height={220}
                            className="object-contain"
                            priority
                        />
                    </div>
                )}
            </div>
        </header>
    );
}