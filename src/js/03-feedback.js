import _throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', _throttle(InputData, 500));
form.addEventListener('submit', FormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

const { email, message } = form.elements;
reloadPage();

function InputData(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function FormSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert(`Пожалуйста, заполните все поля
    Please fill in all fields`);
  }

  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}
