// Interface defining the methods a Director should implement
interface DirectorInterface {
    workFromHome(): string;      // Method to describe working from home
    getCoffeeBreak(): string;    // Method to describe taking a coffee break
    workDirectorTasks(): string; // Method to describe working on director-specific tasks
  }
  
  // Interface defining the methods a Teacher should implement
  interface TeacherInterface {
    workFromHome(): string;      // Method to describe working from home
    getCoffeeBreak(): string;    // Method to describe taking a coffee break
    workTeacherTasks(): string;  // Method to describe working on teacher-specific tasks
  }
  
  // Class implementing the DirectorInterface
  export class Director implements DirectorInterface {
    // Method to describe a director working from home
    workFromHome(): string {
      console.log("Working from home");
      return "Working from home";
    }
  
    // Method to describe a director taking a coffee break
    getCoffeeBreak(): string {
      console.log("Getting a coffee break");
      return "Getting a coffee break";
    }
  
    // Method to describe a director working on their tasks
    workDirectorTasks(): string {
      console.log("Getting to director tasks");
      return "Getting to director tasks";
    }
  }
  
  // Class implementing the TeacherInterface
  export class Teacher implements TeacherInterface {
    // Method to describe a teacher's inability to work from home
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    // Method to describe a teacher's inability to take a coffee break
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    // Method to describe a teacher working on their tasks
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to create an employee based on their salary
  export function createEmployee(salary: number | string): Teacher | Director {
    // If salary is less than 500 and is a number, return a Teacher object
    if (typeof salary === "number" && salary < 500) return new Teacher();
  
    // Otherwise, return a Director object
    return new Director();
  }
  
  // Type guard to check if an employee is a Director
  export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function to execute the appropriate work method based on the employee type
  export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let msg;
  
    // If the employee is a Director, execute director tasks
    if (isDirector(employee)) {
      msg = employee.workDirectorTasks();
    } else {
      // Otherwise, execute teacher tasks
      msg = employee.workTeacherTasks();
    }
  
    console.log(msg);
    return msg;
  }
  
  // Type representing the subjects that can be taught
  type Subjects = "Math" | "History";
  
  // Function to describe teaching a specific class based on the subject
  export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else if (todayClass === "History") {
      return "Teaching History";
    }
  }
  