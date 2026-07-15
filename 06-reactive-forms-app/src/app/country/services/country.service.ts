import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private baseUrl = 'https://api.restcountries.com/countries/v5';
  private apiKey = 'rc_live_bd37eddc033e4107af509a24ed49ed9a';
  private http = inject(HttpClient);

  private _regions = ['Africa', 'Americas', 'Asia', 'europe', 'Oceania'];

  get regions(): string[] {
    return [...this._regions];
  }

  // getCountriesByRegion( region: string) : Observable<Country>{
  //   if (!region) return of([]);

  //   console.log({region});

  //   const url = `${this.baseUrl}`
  // }
}
