import menu from './menu.json';
const menuItemTemplate = '<li class="menu__item"><article class="card"><img src="{{image}}" alt="{{name}}" class="card__image"/><div class="card__content"><h2 class="card__name">{{name}}</h2><p class="card__price"><i class="material-icons"> monetization_on </i>{{price}} кредитов</p><p class="card__descr">{{description}}</p><ul class="tag-list">{{#each ingredients}}<li class="tag-list__item">{{this}}</li>{{/each}}</ul></div><button class="card__button button"><i class="material-icons button__icon"> shopping_cart </i>В корзину</button></article></li>'
var template = Handlebars.compile(menuItemTemplate);
const menuItem = menu.map( item => template(item) );

const list = {
    menuList: document.querySelector('.js-menu'),
}
menuItem.map(item => list.menuList.insertAdjacentHTML('beforeend', item));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const bodyTag = document.querySelector('body');
  const toolbar = document.querySelector('#theme-switch-toggle');
  const persistedTheme = localStorage.getItem('theme');
  if(persistedTheme == Theme.DARK) {
    bodyTag.classList.add(persistedTheme);
    toolbar.checked = true;
  }
const toggler = toolbar.addEventListener('change', changeThemeColor);
function changeThemeColor() {
    bodyTag.classList.toggle(Theme.DARK);
    if(bodyTag.classList.contains(Theme.DARK)){
        localStorage.setItem('theme', Theme.DARK);   
    }else{
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
