import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import CountryMapper from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://api.restcountries.com/countries/v5';
const API_KEY = 'rc_live_bd37eddc033e4107af509a24ed49ed9a';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http
      .get<RESTCountry>(`${API_URL}/capitals`, {
        params: {
          q: query,
        },
        headers: new HttpHeaders({
          Authorization: `Bearer ${API_KEY}`,
        }),
      })
      .pipe(
        map((restCountry) => CountryMapper.mapObjectsToCountryArray(restCountry.data.objects)),
        catchError((error) => {
          console.log('Error fetching', error);

          return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
        }),
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http
      .get<RESTCountry>(`${API_URL}/name`, {
        params: {
          q: query,
        },
        headers: new HttpHeaders({
          Authorization: `Bearer ${API_KEY}`,
        }),
      })
      .pipe(
        map((restCountry) => CountryMapper.mapObjectsToCountryArray(restCountry.data.objects)),
        // delay(3000),
        catchError((error) => {
          console.log('Error fetching', error);

          return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
        }),
      );
  }

  searchCountryByAlphaCode(query: string): Observable<Country | undefined> {
    return this.http
      .get<RESTCountry>(`${API_URL}/code`, {
        params: {
          q: query,
        },
        headers: new HttpHeaders({
          Authorization: `Bearer ${API_KEY}`,
        }),
      })
      .pipe(
        map((restCountry) => CountryMapper.mapObjectsToCountryArray(restCountry.data.objects)),
        map((countries) => countries.at(0)),
        catchError((error) => {
          console.log('Error fetching', error);

          return throwError(() => new Error(`No se pudo obtener paises con ese codigo ${query}`));
        }),
      );
  }
}
