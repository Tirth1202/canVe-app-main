import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDocumentArgs {
    @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
            nullable: false
        })
    where!: DocumentWhereUniqueInput;
}
