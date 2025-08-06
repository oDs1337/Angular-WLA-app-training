import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { DrinkDto } from '@shared/interfaces/DrinksResponseDto';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-drink-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './drink-card.html',
  styleUrl: './drink-card.scss',
})
export class DrinkCard {
  drink: InputSignal<DrinkDto> = input.required<DrinkDto>();
  readMoreClicked: OutputEmitterRef<DrinkDto> = output<DrinkDto>();

  protected onReadMoreClicked(): void {
    this.readMoreClicked.emit(this.drink());
  }
}
