import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LecturerWhereUniqueInput } from "../lecturer/LecturerWhereUniqueInput";

export type ClassModelWhereInput = {
  attendances?: AttendanceListRelationFilter;
  description?: StringNullableFilter;
  gpsCoordinates?: StringNullableFilter;
  id?: StringFilter;
  lecturer?: LecturerWhereUniqueInput;
  title?: StringNullableFilter;
};
