import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  public fullName: string;

  @IsString()
  public nameWithInitials: string;

  @IsString()
  public displayName: string;

  @IsString()
  public designation: string;

  @IsString()
  public employeeType: string;

  @IsNumber()
  public experience: number;

  @IsString()
  public gender: string;

  @IsEmail()
  public email: string;

  @IsString()
  public joinedDate: string;

  @IsNumber()
  public salary: number;

  @IsString()
  public dateOfBirth: string;

  @IsString()
  public mobile: string;

  @IsString()
  public personalNotes: string;
}
