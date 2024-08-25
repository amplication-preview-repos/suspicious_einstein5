import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  gpsCoordinates?: SortOrder;
  id?: SortOrder;
  lecturerId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
