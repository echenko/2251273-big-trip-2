import { getAllPoints } from '../mock/points.js';
import { getOffersByType } from '../mock/offers.js';

export default class EventsModel {
  constructor() {
    this.events = [];
  }

  init() {
    this.events = getAllPoints();
  }

  getEvents() {
    return this.events;
  }

}
