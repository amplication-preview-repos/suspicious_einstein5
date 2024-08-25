import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LECTURER_TITLE_FIELD } from "../lecturer/LecturerTitle";

export const ClassModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Classes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="GPSCoordinates" source="gpsCoordinates" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Lecturer"
          source="lecturer.id"
          reference="Lecturer"
        >
          <TextField source={LECTURER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
