import type { PokemonType } from "@/src/schemas";

interface PokemonAbilitiesProps {
    abilities: PokemonType["abilities"];
}

export default function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Abilities</h2>
            <div className="flex flex-col gap-3">
                {abilities.map((a) => (
                    <div key={a.ability.url} className="flex items-center justify-between">
                        <span className="capitalize font-semibold text-sm text-gray-800">{a.ability.name}</span>
                        {a.is_hidden && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 border border-gray-200">
                                Hidden
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}