import { fetchDetailPokemon } from '../lib/actions';
import pokemonTypes from "@/src/pokemonTypes/types"

interface DetailPokemonProps {
    params: Promise<{pokemonName: string}>
}

export default async function DetailPokemon({ params } : DetailPokemonProps) {
    const { pokemonName } = await params;
    const pokemon = await fetchDetailPokemon(pokemonName);

    return (
        <>
            <header className={`w-[80%] max-w-440 mx-auto ${pokemonTypes[pokemon.types[0].type.name].color} mt-12 p-4 rounded-xl shadow-xl`}>
                <h2 className='text-white font-bold capitalize text-2xl pb-4 border-b border-white'>{pokemonName}</h2>
                <div className='mt-4 flex'>
                    {pokemon.types.map(type => (
                        <p className='mr-4 last-of-type:mr-0 capitalize text-white' key={type.type.url}>
                            {type.type.name}
                        </p>
                    ))}
                </div>
            </header>
        </>
    );
}
