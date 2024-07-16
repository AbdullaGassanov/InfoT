class Model {
  _data = {};

  constructor() {
    this.getsPosition();
    this.getGeopify();
  }

  async getsPosition() {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;

      const data = await fetch(`
       https://api.open-meteo.com/v1/forecast?latitude=${latitude}8&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,wind_speed_10m&timezone=auto
        `);

      this._data.wea = await data.json();

      return this._data.wea;
    });
  }

  async getGeopify() {
    const geoPos = await fetch(
      'https://api.geoapify.com/v1/ipinfo?apiKey=aa3b933e005444bc9af7e1d4ff7857c3'
    );

    this._data.geo = await geoPos.json();

    return this._data.geo;
  }
}

export default new Model();
