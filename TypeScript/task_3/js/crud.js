// Function to insert a new row into the database
// Takes a 'row' object as input and logs the operation
// Returns a randomly generated RowID (a number between 0 and 999)
export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  // Function to delete a row from the database by its RowID
  // Takes a 'rowId' as input and logs the operation
  // Does not return any value
  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }
  
  // Function to update an existing row in the database
  // Takes a 'rowId' and a 'row' object as input and logs the operation
  // Returns the RowID of the updated row
  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
    return rowId;
  }
  