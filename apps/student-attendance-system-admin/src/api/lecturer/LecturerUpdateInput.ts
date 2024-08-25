import { ClassModelUpdateManyWithoutLecturersInput } from "./ClassModelUpdateManyWithoutLecturersInput";

export type LecturerUpdateInput = {
  classes?: ClassModelUpdateManyWithoutLecturersInput;
  course?: string | null;
  department?: string | null;
  email?: string | null;
  name?: string | null;
};
