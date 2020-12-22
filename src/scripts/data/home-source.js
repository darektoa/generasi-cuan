import CONFIG from '../globals/config';

class HomeDB {
  static async content() {
    const response = await fetch(`${CONFIG.BASE_URL}home-content.json`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async data() {
    const response = await fetch(`${CONFIG.BASE_URL}home-data.json`);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default HomeDB;