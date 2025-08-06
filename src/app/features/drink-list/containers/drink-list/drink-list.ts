import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { DrinksApiService } from '@services/drinks-api-service/drinks-api-service';
import { DrinkDto } from '@shared/interfaces/DrinksResponseDto';
import { ProgressSpinner } from 'primeng/progressspinner';
import { DrinkCard } from '@features/drink-list/presenters/drink-card/drink-card';

@Component({
  selector: 'app-drink-list',
  imports: [ProgressSpinner, DrinkCard],
  templateUrl: './drink-list.html',
  styleUrl: './drink-list.scss',
})
export class DrinkList implements OnInit {
  private drinksApiService: DrinksApiService = inject(DrinksApiService);
  protected drinks: WritableSignal<DrinkDto[]> = signal([]);

  ngOnInit() {
    this.fetchDrinks();
  }

  private fetchDrinks(): void {
    this.drinksApiService.getDrinks().subscribe((result: DrinkDto[]) => {
      this.drinks.set(result);
    });
  }

  protected onReadMoreClicked(drink: DrinkDto): void {
    //todo add router to drink details
  }
}
