import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StudentWhereInput = {
  attendances?: AttendanceListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  level?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  profilePhoto?: JsonFilter;
  programOfStudy?: StringNullableFilter;
  session?: StringNullableFilter;
  studentId?: StringNullableFilter;
};
