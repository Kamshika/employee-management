import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  public fullName: string;

  @IsString()
  public nameWithInitials: string;

  @IsString()
  @IsOptional()
  public displayName: string;

  @IsString()
  @IsOptional()
  public designation: string;

  @IsString()
  @IsOptional()
  public employeeType: string;

  @IsNumber()
  @IsOptional()
  public experience: number;

  @IsString()
  @IsOptional()
  public gender: string;

  @IsEmail()
  @IsOptional()
  public email: string;

  @IsString()
  @IsOptional()
  public joinedDate: string;

  @IsNumber()
  @IsOptional()
  public salary: number;

  @IsString()
  @IsOptional()
  public dateOfBirth: string;

  @IsString()
  @IsOptional()
  public mobile: string;

  @IsString()
  @IsOptional()
  public personalNotes: string;
}

export class EditEmployeeDto {
  @IsString()
  @IsOptional()
  public fullName: string;

  @IsString()
  @IsOptional()
  public nameWithInitials: string;

  @IsString()
  @IsOptional()
  public displayName: string;

  @IsString()
  @IsOptional()
  public designation: string;

  @IsString()
  @IsOptional()
  public employeeType: string;

  @IsNumber()
  @IsOptional()
  public experience: number;

  @IsString()
  @IsOptional()
  public gender: string;

  @IsEmail()
  @IsOptional()
  public email: string;

  @IsString()
  @IsOptional()
  public joinedDate: string;

  @IsNumber()
  @IsOptional()
  public salary: number;

  @IsString()
  @IsOptional()
  public dateOfBirth: string;

  @IsString()
  @IsOptional()
  public mobile: string;

  @IsString()
  @IsOptional()
  public personalNotes: string;
}
