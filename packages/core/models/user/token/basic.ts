import { TokenDefaults, TokenInput } from "@typestackapp/core/models/user/token"
import { Serialize } from "@trpc/server/shared"

export const pack = "@typestackapp/core"
export const type = "BasicToken"
export const discriminator = `${pack}:${type}`

export interface BasicTokenInput extends TokenInput {
    data: {
        username: string,
        password: string
    }
}

export type BasicTokenDefaults = TokenDefaults & {
    type: typeof type
    pack: typeof pack
}

export type BasicTokenOutput = Serialize<BasicTokenInput & BasicTokenDefaults>