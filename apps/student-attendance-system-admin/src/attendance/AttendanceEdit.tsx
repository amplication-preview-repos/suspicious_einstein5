import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { StudentTitle } from "../student/StudentTitle";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="Class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <DateTimeInput label="Timestamp" source="timestamp" />
        <BooleanInput label="Verified" source="verified" />
      </SimpleForm>
    </Edit>
  );
};
