import { ClassModel } from "../classModel/ClassModel";

export type Lecturer = {
  classes?: Array<ClassModel>;
  course: string | null;
  createdAt: Date;
  department: string | null;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
