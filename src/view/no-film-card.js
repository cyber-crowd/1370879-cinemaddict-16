import { createElement } from '../render';

const createNoFilmCardTemplate = () => '<h2 class="films-list__title">There are no movies in our database</h2>';

export default class NoFilmCard {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createNoFilmCardTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
