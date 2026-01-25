import TripPresenter from './presenter/trip-presenter.js';
import EventPresenter from './presenter/event-presentor.js';

// trip container
const pageHeader = document.querySelector('.page-header');
const pageHeaderContainer = pageHeader.querySelector('.page-header__container');
const tripMain = pageHeaderContainer.querySelector('.trip-main');
const tripControls = pageHeaderContainer.querySelector('.trip-controls');
const tripFilters = tripControls.querySelector('.trip-controls__filters');
// event container
const pageMain = document.querySelector('.page-main');
const pageMainContainer = pageMain.querySelector('.page-body__container');
const tripEvents = pageMainContainer.querySelector('.trip-events');

// presenters
const tripPresenter = new TripPresenter({
  tripInfoContainer: tripMain,
  tripFilterContainer: tripFilters
});
const eventPresenter = new EventPresenter({
  eventContainer: tripEvents
});

// presenters init
tripPresenter.init();
eventPresenter.init();
