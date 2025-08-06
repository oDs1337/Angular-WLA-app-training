import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Toolbar } from '@shared/components/toolbar/toolbar';
import { ConfigService } from '@services/config-service/config-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private configService: ConfigService = inject(ConfigService);
  private title: Title = inject(Title);

  ngOnInit() {
    this.title.setTitle(this.configService.get('companyName'));
  }
}
