import { Employee, PrismaClient } from '@prisma/client';
import { CreateEmployeeDto, EditEmployeeDto } from '@dtos/employees.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class EmployeeService {
  public employees = new PrismaClient().employee;

  public async findAllEmployee(): Promise<Employee[]> {
    const allEmployee: Employee[] = await this.employees.findMany();
    return allEmployee;
  }

  public async findEmployeeById(employeeId: string): Promise<Employee> {
    if (isEmpty(employeeId)) throw new HttpException(400, 'employeeId is empty');

    const findEmployee: Employee = await this.employees.findUnique({ where: { id: employeeId } });
    if (!findEmployee) throw new HttpException(409, "Employee doesn't exist");

    return findEmployee;
  }

  public async createEmployee(employeeData: CreateEmployeeDto): Promise<Employee> {
    if (isEmpty(employeeData)) throw new HttpException(400, 'employeeData is empty');

    const findEmployee: Employee = await this.employees.findUnique({ where: { email: employeeData.email } });
    if (findEmployee) throw new HttpException(409, `This email ${employeeData.email} already exists`);

    const createEmployeeData: Employee = await this.employees.create({ data: { ...employeeData } });
    return createEmployeeData;
  }

  public async updateEmployee(employeeId: string, employeeData: EditEmployeeDto): Promise<Employee> {
    if (isEmpty(employeeData)) throw new HttpException(400, 'employeeData is empty');

    const findAllEmployee: Employee = await this.employees.findUnique({ where: { id: employeeId } });
    if (!findAllEmployee) throw new HttpException(409, "Employee doesn't exist");

    const updateEmployeeData = await this.employees.update({ where: { id: employeeId }, data: { ...employeeData } });
    return updateEmployeeData;
  }

  public async deleteEmployee(employeeId: string): Promise<Employee> {
    if (isEmpty(employeeId)) throw new HttpException(400, "Employee doesn't existId");

    const findEmployee: Employee = await this.employees.findUnique({ where: { id: employeeId } });
    if (!findEmployee) throw new HttpException(409, "Employee doesn't exist");

    const deleteEmployeeData = await this.employees.delete({ where: { id: employeeId } });
    return deleteEmployeeData;
  }
}

export default EmployeeService;
