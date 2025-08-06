import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from '@services/config-service/config-service';
import { country } from '@shared/types/country';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-dropdown',
  imports: [SelectModule, FormsModule],
  templateUrl: './language-dropdown.html',
  styleUrl: './language-dropdown.scss',
})
export class LanguageDropdown implements OnInit {
  private configService: ConfigService = inject(ConfigService);
  protected countries: country[] = [];
  protected selectedCountry: country | undefined;

  ngOnInit() {
    this.loadCountries();
    this.setDefaultLanguage();
  }

  private loadCountries(): void {
    this.countries = [
      { name: 'English', code: 'GB' },
      { name: 'Polish', code: 'PL' },
      { name: 'Swedish', code: 'SE' },
    ];
  }

  private setDefaultLanguage(): void {
    const defaultLanguageCode: string =
      this.configService.get('defaultLanguage');
    this.selectedCountry = this.countries.find(
      (item: country) => item.code == defaultLanguageCode,
    );
  }
}
