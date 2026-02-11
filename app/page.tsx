import { fetchPokemons } from "./lib/actions";
import PokemonCard from "./ui/PokemonCard";

export default async function Home() {
    const pokemons = await fetchPokemons();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* Page header */}
            <header className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-5xl mx-auto px-6 py-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500 border-4 border-gray-800 shadow-md" />
                    <h1 className="text-2xl font-black tracking-tight text-gray-800">Pokédex</h1>
                    <span className="ml-auto text-sm text-gray-400 font-mono">{pokemons.length} Pokémon</span>
                </div>
            </header>

            {/* Grid */}
            <main className="max-w-5xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}