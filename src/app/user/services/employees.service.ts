import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  getEmployee() {
    return ["emp1", "emp2"]
  }
}
