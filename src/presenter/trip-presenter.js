import TripInfoView from '../view/trip-info-view.js';
import TripFilterView from '../view/trip-filter-view.js';

import {remove, render} from '../framework/render.js';

import { ALL_TYPES_FILTERS } from '../const.js';

export default class TripPresenter {
  #tripInfoContainer = null;
  #tripFilterContainer = null;

  #tripInfo = null;
  #tripFilter = null;

  #eventsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #handleEventChange = null;

  constructor({
    // Containers
    tripInfoContainer,
    tripFilterContainer,
    // Models
    eventsModel,
    offersModel,
    destinationsModel,
    // Handlers
    onDataChange
  }) {
    // Containers
    this.#tripInfoContainer = tripInfoContainer;
    this.#tripFilterContainer = tripFilterContainer;
    // Models
    this.#eventsModel = eventsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#handleEventChange = onDataChange;
  }

  init() {
    this.#renderTripInfo();
    this.#renderTripFilter();
  }

  update() {
    this.destroy();
    this.init();
  }

  #renderTripInfo() {
    this.#tripInfo = new TripInfoView({
      eventsModel: this.#eventsModel,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel
    });

    render(this.#tripInfo, this.#tripInfoContainer, 'AFTERBEGIN');
  }

  #renderTripFilter() {
    this.#tripFilter = new TripFilterView({
      allTypesFilters: ALL_TYPES_FILTERS,
      eventsModel: this.#eventsModel,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel

    });

    render(this.#tripFilter, this.#tripFilterContainer, 'BEFOREEND');
  }

  destroy() {
    remove(this.#tripInfo);
    remove(this.#tripFilter);
  }

}
