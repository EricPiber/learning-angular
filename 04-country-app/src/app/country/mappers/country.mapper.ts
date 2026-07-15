import type { Country } from '../interfaces/country.interface';
import type { Object } from '../interfaces/rest-countries.interface';

export default class CountryMapper {
  static mapObjectToCountry(obj: Object): Country {
    return {
      flag: obj.flag.emoji,
      flag_svg: obj.flag.url_svg,
      name: obj.names.translations['spa'].common ?? 'No Spanish name',
      capital: obj.capitals[0].name,
      population: obj.population,
      code: obj.codes.alpha_3,
      region: obj.region,
      subregion: obj.subregion,
    };
  }

  static mapObjectsToCountryArray(objects: Object[]): Country[] {
    return objects.map(this.mapObjectToCountry);
  }
}
