import { fetchPokemons } from "./lib/actions";
import PokemonCard from "./ui/PokemonCard";

export default async function Home() {

    const pokemons = await fetchPokemons()

    return (
        <>
            <section className="mx-auto w-[90%] max-w-440 p-4 space-y-8 grid grid-cols-2 gap-4">
                {
                    pokemons.map(pokemon => (
                        <PokemonCard
                            key={pokemon.sprites.front_default}
                            pokemon={pokemon}
                        />
                    ))
                }
            </section>
        </>
    );
}
