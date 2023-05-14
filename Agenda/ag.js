const form = document.querySelector('form');
const dateInput = document.getElementById('input-date');
const timeInput = document.getElementById('input-time');
const appointmentsList = document.getElementById('appointments-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const date = dateInput.value;
  const time = timeInput.value;
  const appointment = `${date} às ${time}`;
  const listItem = document.createElement('li');
  listItem.textContent = appointment;
  appointmentsList.appendChild(listItem);
  dateInput.value = '';
  timeInput.value = '';
});
