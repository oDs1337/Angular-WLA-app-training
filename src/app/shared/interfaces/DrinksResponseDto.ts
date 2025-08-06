export interface DrinkDto {
  idDrink: string;
  strDrink: string;
  strDrnkThumb: string;
}

export interface DrinksResponseDto {
  drinks: DrinkDto[];
}
