import { Component, input, InputSignal } from '@angular/core';
import { DrinkDetailsDto } from '@shared/interfaces/DrinkDetailsResponseDto';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-drink-details-card',
  imports: [TableModule],
  templateUrl: './drink-details-card.html',
  styleUrl: './drink-details-card.scss',
})
export class DrinkDetailsCard {
  drink: InputSignal<Partial<DrinkDetailsDto>> =
    input.required<Partial<DrinkDetailsDto>>();
  ingredientPairs: InputSignal<string[][]> = input.required<string[][]>();
}
