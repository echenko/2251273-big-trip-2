import AbstractView from '../framework/view/abstract-view';

function createTripFilter({
  allTypesFilters,
  // eventsModel,
  // offersModel,
  // destinationsModel
}) {
  return (`
          <form class="trip-filters" action="#" method="get">
          ${allTypesFilters.map((type) => `
            <div class="trip-filters__filter">
              <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === 'everything' ? 'checked' : ''}>
              <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
            </div>
            `).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>
        `);
}

export default class TripFilterView extends AbstractView {
  #allTypesFilters = null;
  #eventsModel = null;
  // #offersModel = null;
  #destinationsModel = null;
  #handleFilterChange = null;

  constructor({
    allTypesFilters,
    // Models
    // eventsModel,
    // offersModel,
    // destinationsModel,
    onFilterChange,
  }) {
    super();
    this.#allTypesFilters = allTypesFilters;
    // Models
    // this.#eventsModel = eventsModel;
    // this.#offersModel = offersModel;
    // this.#destinationsModel = destinationsModel;
    // Handlers
    this.#handleFilterChange = onFilterChange;

    this._restoreHandlers();
  }

  get template() {
    return createTripFilter({
      allTypesFilters: this.#allTypesFilters,
      // eventsModel: this.#eventsModel,
      // offersModel: this.#offersModel,
      // destinationsModel: this.#destinationsModel
    });
  }

  _restoreHandlers() {
    this.element.addEventListener('change', (evt) => {
      evt.preventDefault();
      this.#handleFilterChange({filterType: evt.target.value});
    });
  }

}
