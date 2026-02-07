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

const statSchema = z.object({
    base_stat: z.number(),
    effort: z.number(),
    stat: z.object({
        name: z.string(),
        url: z.string()
    })
})

const criesSchema = z.object({
    latest: z.string().nullable(),
    legacy: z.string().nullable()
}).nullable()

const formSchema = z.object({
    name: z.string(),
    url: z.string()
})

const speciesSchema = z.object({
    name: z.string(),
    url: z.string()
}).nullable()

export const detailPokemonSchema = z.object({
    height: z.number(),
    abilities: z.array(abilitySchema),
    sprites: spritesSchema,
    types: z.array(typeSchema),
    id: z.number(),
    name: z.string(),
    weight: z.number(),
    base_experience: z.number().nullable(),
    stats: z.array(statSchema),
    cries: criesSchema,
    forms: z.array(formSchema),
    species: speciesSchema,
})

export type PokemonDraft = z.infer<typeof detailPokemonSchema>
export type PokemonType = PokemonDraft & { name: string }
