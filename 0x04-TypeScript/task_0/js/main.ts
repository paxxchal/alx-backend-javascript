interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  