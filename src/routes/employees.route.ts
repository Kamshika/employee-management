import { Router } from 'express';
import EmployeesController from '@controllers/employees.controller';
import { CreateEmployeeDto, EditEmployeeDto } from '@dtos/employees.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class EmployeesRoute implements Routes {
  public path = '/employees';
  public router = Router();
  public employeesController = new EmployeesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.employeesController.getEmployees);
    this.router.get(`${this.path}/:id`, this.employeesController.getEmployeeById);
    this.router.post(`${this.path}`, validationMiddleware(CreateEmployeeDto, 'body'), this.employeesController.createEmployee);
    this.router.put(`${this.path}/:id`, validationMiddleware(EditEmployeeDto, 'body', true), this.employeesController.updateEmployee);
    this.router.delete(`${this.path}/:id`, this.employeesController.deleteEmployee);
  }
}

export default EmployeesRoute;
