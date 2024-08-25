import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  timestamp?: Date | null;
  verified?: boolean | null;
};
