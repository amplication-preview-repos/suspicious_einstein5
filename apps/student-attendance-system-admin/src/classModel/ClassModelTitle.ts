import { ClassModel as TClassModel } from "../api/classModel/ClassModel";

export const CLASSMODEL_TITLE_FIELD = "title";

export const ClassModelTitle = (record: TClassModel): string => {
  return record.title?.toString() || String(record.id);
};
