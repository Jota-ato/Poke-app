import type { PokemonType } from "@/src/schemas";

interface PokemonAbilitiesProps {
    abilities: PokemonType["abilities"];
}

export default function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Abilities</h2>
            <div className="flex flex-col gap-3">
                {abilities.map((a) => (
                    <div key={a.ability.url} className="flex items-center justify-between">
                        <span className="capitalize font-semibold text-sm">{a.ability.name}</span>
                        {a.is_hidden && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/10">
                                Hidden
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}