import HttpService from './HttpService';

class DataServiceClass {

  constructor(httpService) {
    Object.assign(this, { httpService });
  }

  getCharactersList(api) {
    return this.httpService
      .get(`${api}`)
      .then(({ data }) => data);
  };

  getHousesList(pageIndex) {
    return this.httpService
      .get(`https://www.anapioficeandfire.com/api/houses?page=${pageIndex}`)
      .then(({ data }) => data);
  };

}

export const DataService = new DataServiceClass(HttpService);
