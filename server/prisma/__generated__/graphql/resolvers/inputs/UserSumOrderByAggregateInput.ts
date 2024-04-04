import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserSumOrderByAggregateInput", {})
export class UserSumOrderByAggregateInput {
    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    id?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    phone_number?: "asc" | "desc" | undefined;
}
