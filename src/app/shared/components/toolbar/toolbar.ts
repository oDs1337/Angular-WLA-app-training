import { Component, inject } from '@angular/core';
import { ConfigService } from '@services/config-service/config-service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { LanguageDropdown } from '@shared/components/language-dropdown/language-dropdown';

@Component({
  selector: 'app-toolbar',
  imports: [ToolbarModule, ButtonModule, LanguageDropdown],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  private configService: ConfigService = inject(ConfigService);
  protected companyName: string = this.configService.get('companyName');
  protected logoUrl: string = this.configService.get('logoUrl');
}
