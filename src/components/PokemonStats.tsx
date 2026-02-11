import type { PokemonType } from "@/src/schemas";

const SHORT_LABELS: Record<string, string> = {
    "hp": "HP",
    "attack": "ATK",
    "defense": "DEF",
    "special-attack": "SpA",
    "special-defense": "SpD",
    "speed": "SPD",
};

function getStatColor(value: number): string {
    if (value >= 100) return "#22c55e";
    if (value >= 60) return "#eab308";
    return "#ef4444";
}

interface StatBarProps {
    label: string;
    value: number;
}

function StatBar({ label, value }: StatBarProps) {
    const percentage = Math.min((value / 255) * 100, 100);

    return (
        <div className="flex items-center gap-3 w-full">
            <span className="text-xs font-bold uppercase tracking-widest w-10 shrink-0 text-gray-400">
                {SHORT_LABELS[label] ?? label}
            </span>
            <span className="text-sm font-bold w-8 text-right shrink-0 text-gray-800">{value}</span>
            <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%`, backgroundColor: getStatColor(value) }}
                />
            </div>
        </div>
    );
}

interface PokemonStatsProps {
    stats: PokemonType["stats"];
}

export default function PokemonStats({ stats }: PokemonStatsProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm sm:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Base Stats</h2>
            <div className="flex flex-col gap-3">
                {stats.map((s) => (
                    <StatBar key={s.stat.url} label={s.stat.name} value={s.base_stat} />
                ))}
            </div>
        </div>
    );
}