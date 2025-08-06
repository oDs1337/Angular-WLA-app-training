import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {
  DrinkDto,
  DrinksResponseDto,
} from '@shared/interfaces/DrinksResponseDto';

@Injectable({
  providedIn: 'root',
})
export class DrinksApiService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = 'https://www.thecocktaildb.com';

  public getDrinks(): Observable<DrinkDto[]> {
    return this.http
      .get<DrinksResponseDto>(
        `${this.apiUrl}/api/json/v1/1/filter.php?a=Alcoholic`,
      )
      .pipe(
        map((response: DrinksResponseDto) => response.drinks),
        catchError((err) => {
          console.error('unable to fetch drinks list from api', err);
          return of([] as DrinkDto[]);
        }),
      );
  }
}
