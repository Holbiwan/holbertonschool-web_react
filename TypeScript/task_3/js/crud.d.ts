// task_3/js/crud.d.ts

// Importing types from interface.ts
import { RowID, RowElement } from './interface';

// Declaring the functions from crud.js

// Function to insert a row
export function insertRow(row: RowElement): RowID;

// Function to delete a row by ID
export function deleteRow(rowId: RowID): void;

// Function to update a row by ID
export function updateRow(rowId: RowID, row: RowElement): RowID;
