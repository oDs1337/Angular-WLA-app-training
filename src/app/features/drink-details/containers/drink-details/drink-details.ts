import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { DrinksApiService } from '@services/drinks-api-service/drinks-api-service';
import { ActivatedRoute } from '@angular/router';
import { DrinkDetailsDto } from '@shared/interfaces/DrinkDetailsResponseDto';
import { ProgressSpinner } from 'primeng/progressspinner';
import { DrinkDetailsCard } from '@features/drink-details/presenters/drink-details-card/drink-details-card';

@Component({
  selector: 'app-drink-details',
  imports: [ProgressSpinner, DrinkDetailsCard],
  templateUrl: './drink-details.html',
  styleUrl: './drink-details.scss',
})
export class DrinkDetails implements OnInit {
  private drinksApiService: DrinksApiService = inject(DrinksApiService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected ingredientPairs: WritableSignal<string[][]> = signal([]);
  protected drink: WritableSignal<Partial<DrinkDetailsDto>> = signal({});
  protected loading: WritableSignal<boolean> = signal(true);

  ngOnInit() {
    this.fetchDrinkDetails();
  }

  private fetchDrinkDetails(): void {
    const drinkId: string | null = this.route.snapshot.paramMap.get('id');

    if (!!drinkId) {
      this.drinksApiService
        .getDrinkDetails(drinkId)
        .subscribe((drink: DrinkDetailsDto) => {
          this.drink.set(drink);
          this.ingredientPairs.set(this.pairIngredientWithMeasures());
          this.loading.set(false);
        });
    } else {
      //todo notify error
    }
  }

  private pairIngredientWithMeasures(): string[][] {
    const pairs: [string, string][] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.drink()[
        `strIngredient${i}` as keyof DrinkDetailsDto
      ] as string | null;
      const measure = this.drink()[
        `strMeasure${i}` as keyof DrinkDetailsDto
      ] as string | null;

      if (ingredient && measure) {
        pairs.push([ingredient, measure]);
      }
    }

    return pairs;
  }
}
