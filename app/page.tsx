import { fetchPokemons } from "./lib/actions";
import PokemonCard from "./ui/PokemonCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface HomeProps {
    searchParams: Promise<{ offset?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
    const { offset } = await searchParams;
    const currentOffset = Number(offset ?? 0);
    const { pokemons, hasNext, hasPrev } = await fetchPokemons(currentOffset);

    const prevOffset = currentOffset - 20;
    const nextOffset = currentOffset + 20;

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
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            </main>

            <footer className="max-w-5xl mx-auto px-6 py-8">
                <div className="flex gap-4 justify-center items-center">
                    {hasPrev ? (
                        <Link
                            href={`/?offset=${prevOffset}`}
                            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <FaArrowLeft className="text-xl" />
                        </Link>
                    ) : (
                        <span className="p-3 rounded-full bg-white border border-gray-200 text-gray-300 cursor-not-allowed">
                            <FaArrowLeft className="text-xl" />
                        </span>
                    )}

                    <span className="text-sm font-mono text-gray-400">
                        {currentOffset + 1}–{currentOffset + pokemons.length}
                    </span>

                    {hasNext ? (
                        <Link
                            href={`/?offset=${nextOffset}`}
                            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <FaArrowRight className="text-xl" />
                        </Link>
                    ) : (
                        <span className="p-3 rounded-full bg-white border border-gray-200 text-gray-300 cursor-not-allowed">
                            <FaArrowRight className="text-xl" />
                        </span>
                    )}
                </div>
            </footer>
        </div>
    );
}