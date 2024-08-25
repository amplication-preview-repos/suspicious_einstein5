import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AttendanceWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  verified?: BooleanNullableFilter;
};
