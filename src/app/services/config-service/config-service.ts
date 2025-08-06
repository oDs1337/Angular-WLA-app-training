import { Injectable } from '@angular/core';
import { AppConfig } from '@shared/interfaces/AppConfig';
import appConfigJson from '../../../../config.json' assert { type: 'json' };
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig = appConfigJson;

  loadConfig(): Observable<AppConfig> {
    return of(this.config);
  }

  get<T extends keyof AppConfig>(key: T): AppConfig[T] {
    if (!this.config) {
      throw new Error('unable to load config');
    } else {
      return this.config[key];
    }
  }
}
