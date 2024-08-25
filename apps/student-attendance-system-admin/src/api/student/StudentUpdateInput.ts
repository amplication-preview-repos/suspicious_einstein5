import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";

export type StudentUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutStudentsInput;
  email?: string | null;
  level?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  profilePhoto?: InputJsonValue;
  programOfStudy?: string | null;
  session?: string | null;
  studentId?: string | null;
};
