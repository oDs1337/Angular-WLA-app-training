import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {
  DrinkDto,
  DrinksResponseDto,
} from '@shared/interfaces/DrinksResponseDto';
import {
  DrinkDetailsDto,
  DrinkDetailsResponseDto,
} from '@shared/interfaces/DrinkDetailsResponseDto';

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

  public getDrinkDetails(id: string): Observable<DrinkDetailsDto> {
    return this.http
      .get<DrinkDetailsResponseDto>(
        `${this.apiUrl}/api/json/v1/1/lookup.php?i=${id}`,
      )
      .pipe(
        map(({ drinks: [detail] }: DrinkDetailsResponseDto) => detail),
        catchError((err) => {
          console.error('unable to fetch details data from api', err);
          return of({} as DrinkDetailsDto);
        }),
      );
  }
}
