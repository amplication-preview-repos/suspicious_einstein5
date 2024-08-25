import { AttendanceUpdateManyWithoutClassModelsInput } from "./AttendanceUpdateManyWithoutClassModelsInput";
import { LecturerWhereUniqueInput } from "../lecturer/LecturerWhereUniqueInput";

export type ClassModelUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutClassModelsInput;
  description?: string | null;
  gpsCoordinates?: string | null;
  lecturer?: LecturerWhereUniqueInput | null;
  title?: string | null;
};
