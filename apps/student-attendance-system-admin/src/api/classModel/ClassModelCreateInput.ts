import { AttendanceCreateNestedManyWithoutClassModelsInput } from "./AttendanceCreateNestedManyWithoutClassModelsInput";
import { LecturerWhereUniqueInput } from "../lecturer/LecturerWhereUniqueInput";

export type ClassModelCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutClassModelsInput;
  description?: string | null;
  gpsCoordinates?: string | null;
  lecturer?: LecturerWhereUniqueInput | null;
  title?: string | null;
};
