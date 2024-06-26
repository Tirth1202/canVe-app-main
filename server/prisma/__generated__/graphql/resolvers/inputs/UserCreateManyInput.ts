import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UserCreateManyInput", {})
export class UserCreateManyInput {
    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    email?: string | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    id?: number | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    password?: string | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    phone_number?: number | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    roles!: string;

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    username!: string;
}
