'use strict';

import weatherView from '../views/weatherView.js';
import model from '../model/weatherModel.js';

class Controller {
  _data = {};

  constructor() {
    this.getDataFromModel();
  }

  async getDataFromModel() {
    this._data.geo = await model.getGeopify();
    const { latitude, longitude } = this._data.geo.location;
    this._data.weather = await model.getPosition(latitude, longitude);
    console.log(this._data);
    weatherView.renderWeather(this._data);
  }
}

const c = new Controller();
