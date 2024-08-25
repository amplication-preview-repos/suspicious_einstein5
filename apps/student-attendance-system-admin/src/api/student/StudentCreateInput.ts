import { AttendanceCreateNestedManyWithoutStudentsInput } from "./AttendanceCreateNestedManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";

export type StudentCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  level?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  profilePhoto?: InputJsonValue;
  programOfStudy?: string | null;
  session?: string | null;
  studentId?: string | null;
};
