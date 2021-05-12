import menu from '../menu.json';
import menuTemplate from '../templates/menuTemplate.hbs';

const menuMarkup = menuTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuMarkup);
