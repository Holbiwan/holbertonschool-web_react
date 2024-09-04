// Importing the specific subjects (Cpp, Java, React) from the Subjects module
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Creating a teacher object for the subjects
// This teacher has experience teaching C, which will be shared among different subjects
export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10, // Teacher has 10 years of experience teaching C
};

// Setting up and displaying information for C++ subject
console.log("C++");
cpp.setTeacher = cTeacher; // Assign the teacher to the C++ subject
console.log(cpp.getRequirements()); // Log the requirements needed for the C++ course
console.log(cpp.getAvailableTeacher()); // Log the available teacher for the C++ course

// Setting up and displaying information for Java subject
console.log("Java");
java.setTeacher = cTeacher; // Assign the same teacher to the Java subject
console.log(java.getRequirements()); // Log the requirements needed for the Java course
console.log(java.getAvailableTeacher()); // Log the available teacher for the Java course

// Setting up and displaying information for React subject
console.log("React");
react.setTeacher = cTeacher; // Assign the same teacher to the React subject
console.log(react.getRequirements()); // Log the requirements needed for the React course
console.log(react.getAvailableTeacher()); // Log the available teacher for the React course
