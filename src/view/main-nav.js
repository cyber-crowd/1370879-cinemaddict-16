import { createElement } from '../render';


const createMainNavTemplate = (films) => (`<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${films.filter((item) => item.userDetails.watchlist).length}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${films.filter((item) => item.userDetails.alreadyWatched).length}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${films.filter((item) => item.userDetails.favorite).length}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export default class MainNavigation {
  #element = null;
  #films = null;

  constructor(films) {
    this.#films = films;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createMainNavTemplate(this.#films);
  }

  removeElement() {
    this.#element = null;
  }
}

