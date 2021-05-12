const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

inputRef = document.querySelector('#theme-switch-toggle');
inputRef.addEventListener('change', event => {
  event.target.checked
    ? localStorage.setItem('theme', DARK)
    : localStorage.setItem('theme', LIGHT);

  switchTheme();
});

switchTheme();

function switchTheme() {
  if (localStorage.getItem('theme') === DARK) {
    replaceClassOnTheme(DARK, LIGHT);
    inputRef.checked = true;
    return;
  }

  if (
    localStorage.getItem('theme') === LIGHT ||
    !localStorage.getItem('theme')
  ) {
    replaceClassOnTheme(LIGHT, DARK);
    localStorage.setItem('theme', LIGHT);
  }
}

function replaceClassOnTheme(classAdd, classRemove) {
  document.body.classList.add(classAdd);
  document.body.classList.remove(classRemove);
}
