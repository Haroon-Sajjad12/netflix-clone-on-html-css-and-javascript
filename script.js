document.querySelectorAll('.faqbox').forEach(faq => {
  const question = faq.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    faq.classList.toggle('active');

    const icon = faq.querySelector('.icon');
    if (faq.classList.contains('active')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-plus');
    }
  });
});
