import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Khai báo AppModule là module khởi chạy đầu tiên của ứng dụng
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
