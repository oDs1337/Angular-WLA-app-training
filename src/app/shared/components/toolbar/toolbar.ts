import { Component, inject } from '@angular/core';
import { ConfigService } from '@services/config-service';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  private configService: ConfigService = inject(ConfigService);
  protected companyName: string = this.configService.get('companyName');
  protected logoUrl: string = this.configService.get('logoUrl');
}
