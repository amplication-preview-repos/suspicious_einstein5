import { Attendance } from "../attendance/Attendance";
import { Lecturer } from "../lecturer/Lecturer";

export type ClassModel = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  description: string | null;
  gpsCoordinates: string | null;
  id: string;
  lecturer?: Lecturer | null;
  title: string | null;
  updatedAt: Date;
};
