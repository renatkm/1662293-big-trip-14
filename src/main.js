import {createNavigationComponent} from './view/navigationComponent.js';
import {createFilterComponent} from './view/filterComponent.js';
import {createTripSummaryComponent} from './view/tripSummaryComponent.js';
import {createCostComponent} from './view/costComponent.js';
import {createSortingComponent} from './view/sortingComponent.js';
import {createEditPoint} from './view/editPoint.js';

const render = (container, component, place) => {
  container.insertAdjacentHTML(place, component);
};

// Секция даты поездки и стоимости
const siteTripMainElement  = document.querySelector('.trip-main');
render(siteTripMainElement, createTripSummaryComponent(), 'afterbegin');

const siteTripSummaryElement = siteTripMainElement.querySelector('.trip-main__trip-info');
render(siteTripSummaryElement, createCostComponent(), 'beforeend');

// Меню и фильтры
const siteMenuElement = document.querySelector('.trip-main__trip-controls');
const siteHeaderElement = siteMenuElement.querySelector('.trip-controls__navigation');
render(siteHeaderElement, createNavigationComponent(), 'beforeend');

const siteFilterElement = siteMenuElement.querySelector('.trip-controls__filters');
render(siteFilterElement, createFilterComponent(), 'beforeend');

// const NUMBER_ENDPOINTS =3;

const tripEventsElement = document.querySelector('.trip-events');
render(tripEventsElement, createSortingComponent(), 'beforeend');

render(tripEventsElement, createEditPoint(), 'beforeend');
