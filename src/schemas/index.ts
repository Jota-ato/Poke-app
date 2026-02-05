import z from 'zod';

export const pokemonResponseSchema = z.object({
    count: z.number(),
    next: z.string().nullable(),
    previous: z.string().nullable(),
    results: z.array(z.object({
        name: z.string(),
        url: z.string()
    }))
})

const abilitySchema = z.object({
    ability: z.object({
        name: z.string(),
        url: z.string()
    }),
    is_hidden: z.boolean(),
    slot: z.number(),
})

const spritesSchema = z.object({
    back_default: z.string(),
    back_shiny: z.string().nullable(),
    front_default: z.string(),
    front_shiny: z.string().nullable(),
    other: z.object({
        "official-artwork": z.object({
            front_default: z.string(),
            front_shiny: z.string().nullable()
        })
    })
})

const typeSchema = z.object({
    slot: z.number(),
    type: z.object({
        name: z.string(),
        url: z.string()
    })
})

export const detailPokemonSchema = z.object({
    abilities: z.array(abilitySchema),
    sprites: spritesSchema,
    types: z.array(typeSchema)
})

export type PokemonDraft = z.infer<typeof detailPokemonSchema>
export type PokemonType = PokemonDraft & {name: string}