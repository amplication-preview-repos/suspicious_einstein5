import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LECTURER_TITLE_FIELD } from "./LecturerTitle";

export const LecturerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Course" source="course" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Department" source="department" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ClassModel"
          target="lecturerId"
          label="Classes"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
