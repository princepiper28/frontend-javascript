 interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 21,
  location: 'Lagos'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 23,
  location: 'Abuja'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const header = document.createElement('tr');
header.innerHTML = '<th>First Name</th><th>Location</th>';
table.appendChild(header);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

document.body.appendChild(table);

