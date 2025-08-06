import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { routes } from './app.routes';
import { ConfigService } from '@services/config-service';
import { firstValueFrom } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideAppInitializer(() => {
      const configService: ConfigService = inject(ConfigService);
      return firstValueFrom(configService.loadConfig());
    }),
  ],
};
