import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  profilePhoto?: SortOrder;
  programOfStudy?: SortOrder;
  session?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
