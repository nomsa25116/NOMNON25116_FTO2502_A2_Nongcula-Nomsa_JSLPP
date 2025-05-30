// === DOM Elements ===
const addTaskBtn = document.querySelector('.add-task-btn');
const taskModal = document.getElementById('task-modal');
const closeModalBtn = document.querySelector('.close-btn');
const themeToggle = document.querySelector('.switch input');

// === Open Task Modal ===
addTaskBtn?.addEventListener('click', () => {
  if (taskModal) {
    taskModal.showModal();
  }
});

// === Close Modal ===
closeModalBtn?.addEventListener('click', () => {
  if (taskModal) {
    taskModal.close();
  }
});

// === Close modal when clicking outside it ===
taskModal?.addEventListener('click', (e) => {
  const dialogDimensions = taskModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    taskModal.close();
  }
});

// === Theme Toggling ===
function setTheme(mode) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(mode);
  localStorage.setItem('theme', mode);
}

themeToggle?.addEventListener('change', () => {
  const newTheme = themeToggle.checked ? 'dark' : 'light';
  setTheme(newTheme);
});

// === Load Theme on Page Load ===
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  themeToggle.checked = savedTheme === 'dark';
});
