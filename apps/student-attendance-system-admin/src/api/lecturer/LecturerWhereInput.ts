import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LecturerWhereInput = {
  classes?: ClassModelListRelationFilter;
  course?: StringNullableFilter;
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
