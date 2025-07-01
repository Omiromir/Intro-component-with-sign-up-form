 const form = document.querySelector('.signup__form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let hasError = false;

    form.querySelectorAll('.signup__input').forEach(input => {
      const wrapper = input.parentElement;
      const errorMsg = wrapper.querySelector('.signup__error-message');
      const val = input.value.trim();
      const isEmail = input.type === 'email';
      const invalidEmail = isEmail && !/^[^@]+@[^@]+\.[^@]+$/.test(val);

      if (!val || invalidEmail) {
        wrapper.classList.add('error');
        errorMsg.textContent = invalidEmail
          ? 'Looks like this is not an email'
          : `${input.placeholder} cannot be empty`;
        hasError = true;
      } else {
        wrapper.classList.remove('error');
        errorMsg.textContent = '';
      }
    });

    if (!hasError) {
      form.reset();
      form.querySelectorAll('.signup__input-wrapper').forEach(w => {
        w.classList.remove('error');
        w.querySelector('.signup__error-message').textContent = '';
      });
    }
  });