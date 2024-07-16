class WeatherView {
  constructor() {
    this.weather = document.querySelector('.weather');
  }

  addWeatherHandler(handler) {
    /*   this.weather.addEventListener('click', e => {
      console.log(e.target); */

    handler();
    /*  }); */
  }

  renderWeather(data) {
    if (!data) return;

    this.weather.textContent = '';

    /* this.weather.insertAdjacentHTML(
      'afterbegin',
      `
          <label class="weather__city--desc">City:</label>
          <label class="weather__city">${data.geo.city.name}</label>

          <label class="weather__temperature">${data.weather.hourly.apparent_temperature[0]}</label>
          <img src="" alt="" class="weather__icon" />

      `
    ); */

    console.log(data._data);
  }
}

export default new WeatherView();
