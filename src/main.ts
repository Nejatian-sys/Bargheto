import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));
