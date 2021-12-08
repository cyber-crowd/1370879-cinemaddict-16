import UserRank from './view/user-rank.js';
import { render, RenderPosition } from './render.js';
import MainNavigation from './view/main-nav.js';
import SortList from './view/sorting.js';
import FilmCard from './view/film-card.js';
import ShowMoreBtn from './view/show-more-btn.js';
import FilmsBoard from './view/films-board.js';
import FooterStats from './view/footer-stats.js';
// import FilmPopup from './view/film-details-popup.js';
import { generateFilm } from './mock/film.js';

const FILM_QUANTITY_CARD = 15;
const MAX_FILMS = 5;
const headerEl = document.querySelector('.header');
const mainEl = document.querySelector('.main');
const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);
let currentCount = MAX_FILMS;
const filmsBoardComp = new FilmsBoard();
const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');
const footer = document.querySelector('.footer');
const footerStats = footer.querySelector('.footer__statistics');

render(headerEl, new UserRank().element, RenderPosition.BEFOREEND);
render(mainEl, new MainNavigation(films).element, RenderPosition.BEFOREEND);
render(mainEl, new SortList().element, RenderPosition.BEFOREEND);
render(mainEl, filmsBoardComp.element, RenderPosition.BEFOREEND);
render(mainEl, new ShowMoreBtn().element, RenderPosition.BEFOREEND);
render(footerStats, new FooterStats().element, RenderPosition.BEFOREEND);

const renderFilmCard = (count) => {
  filmsBoardEl.innerHTML = '';

  for (let i = 0; i < count; i++) {
    render(filmsBoardEl, new FilmCard(films[i]).element, RenderPosition.BEFOREEND);
  }
};

// const renderFilm = (filmBoardElement, films) => {
//   const filmComponent = new FilmCard(films);
//   const filmPopupComponent = new FilmPopup(films);

//   const replaceFilmCardToFilmPopup = () => {
//     filmBoardElement.replaceChild(filmPopupComponent.element, filmComponent.element);
//   };

//   const replaceFilmPopupToFilmCard = () => {
//     filmBoardElement.replaceChild(filmComponent.element, filmPopupComponent.element);
//   };

//   filmComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
//     replaceFilmCardToFilmPopup();
//   });

//   filmPopupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
//     replaceFilmPopupToFilmCard();
//   });
//   render(filmBoardElement, filmPopupComponent.element, RenderPosition.BEFOREEND);
// };

renderFilmCard(MAX_FILMS);

const moreButton = document.querySelector('.films-list__show-more');

const onMoreButtonClick = () => {
  currentCount += MAX_FILMS;

  if (currentCount >= FILM_QUANTITY_CARD) {
    moreButton.classList.add('visually-hidden');
    moreButton.removeEventListener('click', onMoreButtonClick);
  }

  renderFilmCard(currentCount);
};

moreButton.addEventListener('click', onMoreButtonClick);
