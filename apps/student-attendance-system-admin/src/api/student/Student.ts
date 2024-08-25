import { Attendance } from "../attendance/Attendance";
import { JsonValue } from "type-fest";

export type Student = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  email: string | null;
  id: string;
  level: string | null;
  name: string | null;
  phoneNumber: string | null;
  profilePhoto: JsonValue;
  programOfStudy: string | null;
  session: string | null;
  studentId: string | null;
  updatedAt: Date;
};
