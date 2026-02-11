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
    if (value >= 100) return "#4ade80";
    if (value >= 60) return "#facc15";
    return "#f87171";
}

interface StatBarProps {
    label: string;
    value: number;
}

function StatBar({ label, value }: StatBarProps) {
    const percentage = Math.min((value / 255) * 100, 100);

    return (
        <div className="flex items-center gap-3 w-full">
            <span className="text-xs font-bold uppercase tracking-widest w-10 shrink-0 opacity-60">
                {SHORT_LABELS[label] ?? label}
            </span>
            <span className="text-sm font-bold w-8 text-right shrink-0">{value}</span>
            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 sm:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Base Stats</h2>
            <div className="flex flex-col gap-3">
                {stats.map((s) => (
                    <StatBar key={s.stat.url} label={s.stat.name} value={s.base_stat} />
                ))}
            </div>
        </div>
    );
}