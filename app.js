// Знаходимо елементи HTML, з якими будемо працювати
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const positionInput = document.querySelector('#position');
const salaryInput = document.querySelector('#salary');
const table = document.querySelector('#employeeTable tbody');

// Створюємо масив для зберігання співробітників
let employees = [];

// Функція, яка додає нового співробітника до масиву та оновлює таблицю
function addEmployee(event) {
  event.preventDefault();
  
  // Створюємо об'єкт для нового співробітника
  const employee = {
    name: nameInput.value,
    age: ageInput.value,
    position: positionInput.value,
    salary: salaryInput.value
  };
  
  // Додаємо нового співробітника до масиву
  employees.push(employee);
  
  // Очищаємо форму
  form.reset();
  
  // Оновлюємо таблицю
  updateTable();
}

// Функція, яка оновлює таблицю
function updateTable() {
  // Очищаємо таблицю
  table.innerHTML = '';
  
  // Проходимо по всіх співробітниках у масиві та додаємо їх до таблиці
  employees.forEach(employee => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const positionCell = document.createElement('td');
    const salaryCell = document.createElement('td');
    
    nameCell.innerText = employee.name;
    ageCell.innerText = employee.age;
    positionCell.innerText = employee.position;
    salaryCell.innerText = employee.salary;
    
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(positionCell);
    row.appendChild(salaryCell);
    
    table.appendChild(row);
  });
}

// Додаємо обробник події на форму
form.addEventListener('submit', addEmployee);
// Функція, яка видаляє співробітника з масиву та оновлює таблицю
function removeEmployee(index) {
  employees.splice(index, 1);
  updateTable();
  }
  
  // Функція, яка створює кнопку для видалення співробітника
  function createDeleteButton(index) {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Видалити';
  deleteButton.addEventListener('click', () => removeEmployee(index));
  return deleteButton;
  }
  
  // Функція, яка оновлює таблицю
  function updateTable() {
  // Очищаємо таблицю
  table.innerHTML = '';
  
  // Проходимо по всіх співробітниках у масиві та додаємо їх до таблиці
  employees.forEach((employee, index) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const positionCell = document.createElement('td');
  const salaryCell = document.createElement('td');
  const deleteCell = document.createElement('td');
  

  nameCell.innerText = employee.name;
  ageCell.innerText = employee.age;
  positionCell.innerText = employee.position;
  salaryCell.innerText = employee.salary;
  deleteCell.appendChild(createDeleteButton(index));
  
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(positionCell);
  row.appendChild(salaryCell);
  row.appendChild(deleteCell);
  
  table.appendChild(row);
  });
  }
  // Функція, яка оновлює підрахунок робітників
function updateEmployeeCount() {
  const employeeCount = document.querySelector('#employeeCount');
  const count = employees.length;
  employeeCount.innerText = `Кількість робітників: ${count}`;
}

// Функція, яка додає нового співробітника до масиву та оновлює таблицю
function addEmployee(event) {
  event.preventDefault();

  // Створюємо об'єкт для нового співробітника
  const employee = {
    name: nameInput.value,
    age: ageInput.value,
    position: positionInput.value,
    salary: salaryInput.value
  };

  // Додаємо нового співробітника до масиву
  employees.push(employee);

  // Очищаємо форму
  form.reset();

  // Оновлюємо таблицю та підрахунок робітників
  updateTable();
  updateEmployeeCount();
}

// Функція, яка видаляє співробітника з масиву та оновлює таблицю
function removeEmployee(index) {
  employees.splice(index, 1);
  updateTable();
  updateEmployeeCount();
}
  
  // Додаємо обробник події на форму
  form.addEventListener('submit', addEmployee);