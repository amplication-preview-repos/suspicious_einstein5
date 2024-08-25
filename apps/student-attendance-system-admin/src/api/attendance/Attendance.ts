import { ClassModel } from "../classModel/ClassModel";
import { Student } from "../student/Student";

export type Attendance = {
  classField?: ClassModel | null;
  createdAt: Date;
  id: string;
  student?: Student | null;
  timestamp: Date | null;
  updatedAt: Date;
  verified: boolean | null;
};
