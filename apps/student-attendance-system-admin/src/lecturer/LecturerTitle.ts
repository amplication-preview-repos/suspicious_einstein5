import { Lecturer as TLecturer } from "../api/lecturer/Lecturer";

export const LECTURER_TITLE_FIELD = "name";

export const LecturerTitle = (record: TLecturer): string => {
  return record.name?.toString() || String(record.id);
};
