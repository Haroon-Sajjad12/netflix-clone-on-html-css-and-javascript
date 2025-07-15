
document.querySelectorAll('.terms-container section h2').forEach(header => {
  header.style.cursor = 'pointer';
  header.addEventListener('click', () => {
    const section = header.parentElement;
    section.classList.toggle('collapsed');
  });
});


document.querySelectorAll('.terms-container section').forEach(section => {
  section.classList.add('collapsed');
});
