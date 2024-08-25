import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  classFieldId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  verified?: SortOrder;
};
