import Image from "next/image";
import type { PokemonType } from "@/src/schemas";

interface SpriteEntry {
    src: string;
    label: string;
}

interface PokemonSpritesProps {
    name: string;
    sprites: PokemonType["sprites"];
}

export default function PokemonSprites({ name, sprites }: PokemonSpritesProps) {
    const shinyArt = sprites.other["official-artwork"].front_shiny;

    const entries: SpriteEntry[] = [
        { src: sprites.front_default, label: "Front" },
        { src: sprites.back_default, label: "Back" },
        ...(sprites.front_shiny ? [{ src: sprites.front_shiny, label: "Shiny" }] : []),
        ...(sprites.back_shiny ? [{ src: sprites.back_shiny, label: "Shiny Back" }] : []),
        ...(shinyArt ? [{ src: shinyArt, label: "Shiny Art" }] : []),
    ];

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 sm:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Sprites</h2>
            <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
                {entries.map((entry) => (
                    <div key={entry.label} className="flex flex-col items-center gap-1">
                        <Image
                            src={entry.src}
                            alt={`${name} ${entry.label}`}
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <span className="text-xs text-white/40">{entry.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}