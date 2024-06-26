import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DocumentCountOrderByAggregateInput", {})
export class DocumentCountOrderByAggregateInput {
    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    doc_type?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    id?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    doc_number?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    doc_status?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    userId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    doc_url?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    department?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    bookmarked?: "asc" | "desc" | undefined;
}
