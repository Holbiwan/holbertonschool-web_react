// Interface for Directors
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Interface for Teachers
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Class for Directors implementing the DirectorInterface
  export class Director implements DirectorInterface {
    workFromHome(): string {
      console.log("Working from home");
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      console.log("Getting a coffee break");
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      console.log("Getting to director tasks");
      return "Getting to director tasks";
    }
  }
  
  // Class for Teachers implementing the TeacherInterface
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to create an employee based on salary
  export function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Type predicate function to check if an employee is a Director
  export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function to execute the appropriate work based on employee type
  export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let msg;
  
    if (isDirector(employee)) {
      msg = employee.workDirectorTasks();
    } else {
      msg = employee.workTeacherTasks();
    }
  
    console.log(msg);
    return msg;
  }
  
  // Literal type for Subjects
  type Subjects = "Math" | "History";
  
  // Function to return the teaching class based on the subject
  export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else if (todayClass === "History") {
      return "Teaching History";
    }
  }
  