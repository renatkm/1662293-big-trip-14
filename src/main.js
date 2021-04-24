import {createNavigationComponent} from './view/navigationComponent.js';
import {createFilterComponent} from './view/filterComponent.js';
import {createTripComponent} from './view/tripComponent.js';
import {createCostComponent} from './view/costComponent.js';

const render = (container, component, place) => {
  container.insertAdjacentHTML(place, component);
};

const NUMBER_ENDPOINTS =3;
const siteMainElement = document.querySelector('.trip-main__trip-controls');

const siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
render(siteHeaderElement, createNavigationComponent(), 'beforeend');

const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
render(siteFilterElement, createFilterComponent(), 'beforeend');
