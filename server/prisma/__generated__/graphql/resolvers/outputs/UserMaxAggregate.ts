import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserMaxAggregate", {
        simpleResolvers: true
    })
export class UserMaxAggregate {
    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    email!: string | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    id!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    password!: string | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    phone_number!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    roles!: string | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    username!: string | null;
}
