import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";

@TypeGraphQL.ObjectType("UserGroupBy", {
        simpleResolvers: true
    })
export class UserGroupBy {
    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    email!: string | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    id!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    password!: string | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    phone_number!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    roles!: string;

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    username!: string;

    @TypeGraphQL.Field(_type => UserCountAggregate, {
            nullable: true
        })
    _count!: UserCountAggregate | null;

    @TypeGraphQL.Field(_type => UserAvgAggregate, {
            nullable: true
        })
    _avg!: UserAvgAggregate | null;

    @TypeGraphQL.Field(_type => UserSumAggregate, {
            nullable: true
        })
    _sum!: UserSumAggregate | null;

    @TypeGraphQL.Field(_type => UserMinAggregate, {
            nullable: true
        })
    _min!: UserMinAggregate | null;

    @TypeGraphQL.Field(_type => UserMaxAggregate, {
            nullable: true
        })
    _max!: UserMaxAggregate | null;
}
