abstract class Department {
  // private readonly ID: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly ID: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.ID = '2';
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(ID: string, public admins: string[]) {
    super(ID, 'IT');
  }

  describe() {
    console.log(`IT Department - ID: ${this.ID}`);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No reports found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReports(value);
  }

  private constructor(ID: string, private reports: string[]) {
    super(ID, 'Account');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Accouting Department - ID: ${this.ID}`);
  }

  addEmployee(name: string) {
    if (name === 'max') {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const emp1 = Department.createEmployee('geni');
console.log(emp1);
const IT = new ITDepartment('A1', ['max']);

IT.addEmployee('Ak');
IT.addEmployee('Vis');

// IT.employees[2] = 'ERROR !!';

IT.describe();
IT.printEmployeeInfo();
console.log(IT);

// const accouting = new AccountDepartment('D2', []);

const accouting = AccountDepartment.getInstance();
const accouting2 = AccountDepartment.getInstance();

console.log(accouting, accouting2);

accouting.mostRecentReport = 'End year reprots';
accouting.addEmployee('max');
accouting.addEmployee('bliss');

accouting.addReports('Something went wrong...!!!');
//console.log(accouting);

console.log(accouting.mostRecentReport);
accouting.getReports();
// const ITCopy = { name: 'DUMMY', describe: IT.describe };
// ITCopy.describe();

accouting.describe();
