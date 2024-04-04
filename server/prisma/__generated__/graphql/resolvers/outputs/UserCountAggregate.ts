import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserCountAggregate", {
        simpleResolvers: true
    })
export class UserCountAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    email!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    id!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    password!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    phone_number!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    roles!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    username!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    _all!: number;
}