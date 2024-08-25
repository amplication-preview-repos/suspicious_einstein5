import { SortOrder } from "../../util/SortOrder";

export type LecturerOrderByInput = {
  course?: SortOrder;
  createdAt?: SortOrder;
  department?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
