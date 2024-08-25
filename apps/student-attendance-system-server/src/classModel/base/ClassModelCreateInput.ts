/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceCreateNestedManyWithoutClassModelsInput } from "./AttendanceCreateNestedManyWithoutClassModelsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { LecturerWhereUniqueInput } from "../../lecturer/base/LecturerWhereUniqueInput";

@InputType()
class ClassModelCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceCreateNestedManyWithoutClassModelsInput,
  })
  @ValidateNested()
  @Type(() => AttendanceCreateNestedManyWithoutClassModelsInput)
  @IsOptional()
  @Field(() => AttendanceCreateNestedManyWithoutClassModelsInput, {
    nullable: true,
  })
  attendances?: AttendanceCreateNestedManyWithoutClassModelsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gpsCoordinates?: string | null;

  @ApiProperty({
    required: false,
    type: () => LecturerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LecturerWhereUniqueInput)
  @IsOptional()
  @Field(() => LecturerWhereUniqueInput, {
    nullable: true,
  })
  lecturer?: LecturerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ClassModelCreateInput as ClassModelCreateInput };
