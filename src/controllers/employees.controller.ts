import { NextFunction, Request, Response } from 'express';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto, EditEmployeeDto } from '@dtos/employees.dto';
import employeeService from '@services/employees.service';

class EmployeesController {
  public employeeService = new employeeService();

  public getEmployees = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllEmployeesData: Employee[] = await this.employeeService.findAllEmployee();

      res.status(200).json({ data: findAllEmployeesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getEmployeeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const employeeId = req.params.id;
      const findOneEmployeeData: Employee = await this.employeeService.findEmployeeById(employeeId);

      res.status(200).json({ data: findOneEmployeeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const employeeData: CreateEmployeeDto = req.body;
      const createEmployeeData: Employee = await this.employeeService.createEmployee(employeeData);

      res.status(201).json({ data: createEmployeeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const employeeId = req.params.id;
      const employeeData: EditEmployeeDto = req.body;
      const updateEmployeeData: Employee = await this.employeeService.updateEmployee(employeeId, employeeData);

      res.status(200).json({ data: updateEmployeeData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const employeeId = req.params.id;
      const deleteEmployeeData: Employee = await this.employeeService.deleteEmployee(employeeId);

      res.status(200).json({ data: deleteEmployeeData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default EmployeesController;
