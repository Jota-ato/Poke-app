import type { PokemonType } from "@/src/schemas"
import Image from "next/image"

type PokemonCardProps = {
    pokemon: PokemonType
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <article className="p-4 bg-green-400 rounded-xl shadow-xl flex flex-col md:flex-row items-center">
            <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white capitalize">
                    {pokemon.name}
                </h2>
                <div className="flex flex-row md:flex-col gap-4 mt-4 -ml-2">
                    {pokemon.types.map((type, idx) => (
                        <p key={idx} className="text-sm md:text-xl text-white px-3 md:px-4 py-2 md:py-2 bg-white/40 w-min rounded-full cap">
                            {type.type.name}
                        </p>
                    ))}
                </div>

            </div>
            <div>
                <Image
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt="Pokemon front"
                    className="-mb-4 -mr-4"
                    height={500}
                    width={500}
                />
            </div>
        </article>
    )
}