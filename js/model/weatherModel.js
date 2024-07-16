class Model {
  _data = {};

  constructor() {
    this.getGeopify();
  }

  async getPosition(latitude, longitude) {
    const data = await fetch(`
       https://api.open-meteo.com/v1/forecast?latitude=${latitude}8&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,wind_speed_10m&timezone=auto
        `);

    return await data.json();
  }

  async getGeopify() {
    const geoPos = await fetch(
      'https://api.geoapify.com/v1/ipinfo?apiKey=aa3b933e005444bc9af7e1d4ff7857c3'
    );

    const dataGeo = await geoPos.json();

    return dataGeo;
  }

  async getData() {
    return await this.getGeopify();
  }
}

export default new Model();
