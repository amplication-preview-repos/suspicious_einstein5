import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceUpdateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  timestamp?: Date | null;
  verified?: boolean | null;
};
