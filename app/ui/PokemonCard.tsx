import type { PokemonType } from "@/src/schemas"
import Image from "next/image"
import Link from "next/link"
import pokemonTypes from "@/src/pokemonTypes/types"

interface PokemonCardProps {
    pokemon: PokemonType
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    const primaryType = pokemon.types[0].type.name;
    const typeColor = pokemonTypes[primaryType]?.color ?? "bg-pokemon-normal";

    return (
        <Link href={`/${pokemon.name}`} className="group block focus:outline-none">
            <article className={`relative overflow-hidden rounded-2xl shadow-sm border border-black/5 ${typeColor} h-48 flex items-end justify-between transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg`}>

                {/* Decorative circle */}
                <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-black/10 pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-black/10 pointer-events-none" />

                {/* Left: text info */}
                <div className="relative z-10 p-5 flex flex-col gap-2 flex-1 min-w-0">
                    <p className="text-white/70 text-xs font-mono tracking-widest">
                        #{String(pokemon.id).padStart(3, "0")}
                    </p>
                    <h2 className="text-xl font-black capitalize text-white tracking-tight leading-none truncate">
                        {pokemon.name}
                    </h2>
                    <div className="flex flex-col gap-1.5 mt-1">
                        {pokemon.types.map((t) => (
                            <span
                                key={t.type.url}
                                className="text-xs text-white font-semibold capitalize px-2.5 py-1 bg-white/30 rounded-full w-fit backdrop-blur-sm"
                            >
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: artwork */}
                <div className="relative z-10 shrink-0 self-end">
                    <Image
                        src={pokemon.sprites.other["official-artwork"].front_default}
                        alt={`${pokemon.name} artwork`}
                        width={130}
                        height={130}
                        className="object-contain drop-shadow-lg -mb-2 -mr-2 transition-transform duration-200 group-hover:scale-105"
                        priority
                    />
                </div>
            </article>
        </Link>
    );
}