'use strict';

import weatherView from '../views/weatherView.js';
import model from '../model/weatherModel.js';

class Controller {
  _data = {};

  constructor(model, wV) {
    this.wV = wV;
    this.m = model;

    this.getDataFromModel();

    this.wV.addWeatherHandler.bind(this.showWeather);
  }

  async getDataFromModel() {
    this._data.wea = await model.getsPosition();
    console.log(this._data.wea);
  }

  showWeather() {
    weatherView.renderWeather(model._data);
  }
}

const c = new Controller(model, weatherView);

c.showWeather();

/* const c = new Controller(weatherView, model);

c.showWeather(); */
