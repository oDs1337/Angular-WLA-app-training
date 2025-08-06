import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkDetailsCard } from './drink-details-card';

describe('DrinkDetailsCard', () => {
  let component: DrinkDetailsCard;
  let fixture: ComponentFixture<DrinkDetailsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkDetailsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
