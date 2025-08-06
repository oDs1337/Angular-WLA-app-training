export interface DrinkDto {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface DrinksResponseDto {
  drinks: DrinkDto[];
}
