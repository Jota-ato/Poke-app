import type { PokemonType } from "@/src/schemas"
import Image from "next/image"
import Link from "next/link"
import pokemonTypes from "@/src/pokemonTypes/types"

interface PokemonCardProps {
    pokemon: PokemonType
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <article className={`p-4 sm:p-6 ${pokemonTypes[pokemon.types[0].type.name].color} rounded-xl sm:rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between h-80`}>
            <div className="w-full md:w-auto md:flex-1 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-md sm:text-3xl md:text-4xl lg:text-5xl 
                             font-bold text-white capitalize mb-4">
                    {pokemon.name}
                </h2>

                {/* Tipos */}
                <div className="flex flex-row md:flex-col gap-2 sm:gap-3 justify-center md:justify-start flex-wrap mb-6">
                    {pokemon.types.map((type, idx) => (
                        <p key={idx}
                            className="text-xs sm:text-sm md:text-base lg:text-lg  text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5  bg-white/40 rounded-full capitalize font-medium backdrop-blur-sm">
                            {type.type.name}
                        </p>
                    ))}
                </div>
                <Link
                    className="px-2 py-3 text-xs bg-white/60 rounded-full cursor-pointer font-bold"
                    href={`/${pokemon.name}`}
                >
                    Más información
                </Link>
            </div>

            {/* Contenedor de imagen */}
            <div className="relative w-full md:w-auto md:shrink-0">
                <Image
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt={`${pokemon.name} artwork`}
                    className="w-full h-auto md:-mb-8 md:-mr-6"
                    height={500}
                    width={500}
                    priority
                    sizes="(max-width: 640px) 100vw, 
                           (max-width: 768px) 80vw, 
                           (max-width: 1024px) 400px, 
                           500px"
                />
            </div>
        </article>
    )
}