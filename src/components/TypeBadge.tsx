import pokemonTypes from "@/src/pokemonTypes/types";

interface TypeBadgeProps {
    name: string;
}

export default function TypeBadge({ name }: TypeBadgeProps) {
    const typeColor = pokemonTypes[name]?.color ?? "bg-pokemon-normal";

    return (
        <span className={`${typeColor} text-white text-xs font-bold px-3 py-1 rounded-full capitalize tracking-wide`}>
            {name}
        </span>
    );
}