import { ClassModelCreateNestedManyWithoutLecturersInput } from "./ClassModelCreateNestedManyWithoutLecturersInput";

export type LecturerCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutLecturersInput;
  course?: string | null;
  department?: string | null;
  email?: string | null;
  name?: string | null;
};
