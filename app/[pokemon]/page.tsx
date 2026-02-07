
import { json } from 'zod';
import { fetchDetailPokemon } from '../lib/actions';

interface DetailPokemonProps {
    params: Promise<{pokemon: string}>
}

export default async function DetailPokemon({ params } : DetailPokemonProps) {
    const { pokemon } = await params;

    const detailInfo = await fetchDetailPokemon(pokemon)

    return (
        <>
            {JSON.stringify(detailInfo)}
        </>
    );
}
