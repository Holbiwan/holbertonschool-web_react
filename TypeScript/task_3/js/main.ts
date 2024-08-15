/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an additional age field
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};

// Update the row with the new data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its ID
CRUD.deleteRow(newRowID);
