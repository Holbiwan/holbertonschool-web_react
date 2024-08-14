// Declaration of the Student interface with the required properties
interface Student {
    first_name: string;
    name: string;
    age: number;
    location: string;
}

// Creating the first student object according to the Student interface
const student1: Student = {
    first_name: 'Teddy',
    name: 'Riner',
    age: 35,
    location: 'Paris',
};

// Creating the second student object according to the Student interface
const student2: Student = {
    first_name: 'Rafael',
    lastName: 'Nadal', // Error: Incorrect use of 'lastName' instead of 'name'
    age: 38,
    location: 'Manacor',
};

// Correction: Renaming 'lastName' to 'name' to match the Student interface
const student2: Student = {
    first_name: 'Rafael',
    name: 'Nadal',
    age: 38,
    location: 'Manacor',
}; 

// Creating a list of students containing the two student objects defined above
const studentsList: Array<Student> = [student1, student2];

// Defining the labels for the table columns
const labels: string[] = ["first_name", "location"];

// Creating an HTML table element
const table: HTMLTableElement = document.createElement("table");

// Creating table sections: thead for the header and tbody for the body
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Appending the table to the HTML document body
document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

// Adding column headers to the table using the defined labels
for (let i: number = 0; i < labels.length; i++) {
    const th: HTMLTableCellElement = document.createElement("th");
    th.appendChild(document.createTextNode(`${labels[i]}`));
    thead.appendChild(th);
}

// Adding the students' data to the table
for (let i: number = 0; i < studentsList.length; i++) {
    const tr: HTMLTableRowElement = document.createElement("tr");
    tbody.appendChild(tr);
    
    // Extracting specific values to display (first_name and location)
    const values: string[] = [
        studentsList[i].first_name,
        studentsList[i].location,
    ];

    // Adding the values to the table row
    for (let j: number = 0; j < values.length; j++) {
        const td: HTMLTableCellElement = document.createElement("td");
        td.appendChild(document.createTextNode(`${values[j]}`));
        tr.appendChild(td);
    }
}
