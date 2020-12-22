import CONFIG from '../globals/config';

class GeneralDB {
  static async data() {
    const response = await fetch(`${CONFIG.BASE_URL}general-data.json`);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default GeneralDB;