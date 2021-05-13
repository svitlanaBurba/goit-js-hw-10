const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

inputRef = document.querySelector('#theme-switch-toggle');
inputRef.addEventListener('change', event => {
  if (event.target.checked) {
    replaceClassOnTheme(DARK, LIGHT);
  } else {
    replaceClassOnTheme(LIGHT, DARK);
  }
});

function replaceClassOnTheme(classAdd, classRemove) {
  document.body.classList.add(classAdd);
  document.body.classList.remove(classRemove);
  localStorage.setItem('theme', classAdd);
}

if (localStorage.getItem('theme') === DARK) {
  document.body.classList.add(DARK);
  inputRef.checked = true;
} else {
  document.body.classList.add(LIGHT);
}

// SECOND VARIANT
// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };

//   const { LIGHT, DARK } = Theme;

//   inputRef = document.querySelector('#theme-switch-toggle');
//   inputRef.addEventListener('change', event => {
//     if (event.target.checked) {
//       localStorage.setItem('theme', DARK);
//     } else {
//       localStorage.setItem('theme', LIGHT);
//     }

//     switchTheme();
//   });

//   switchTheme();

//   function switchTheme() {
//     if (localStorage.getItem('theme') === DARK) {
//       replaceClassOnTheme(DARK, LIGHT);
//       inputRef.checked = true;
//       return;
//     }

//     if (
//       localStorage.getItem('theme') === LIGHT ||
//       !localStorage.getItem('theme')
//     ) {
//       replaceClassOnTheme(LIGHT, DARK);
//       localStorage.setItem('theme', LIGHT);
//     }
//   }

//   function replaceClassOnTheme(classAdd, classRemove) {
//     document.body.classList.add(classAdd);
//     document.body.classList.remove(classRemove);
//   }
