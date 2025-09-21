import Token from "../src/modules/token/domain/Token";

declare module "express" {
    export interface Response {
        locals: {
            token?: Token
        };
    }
}
