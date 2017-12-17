import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ArticlesComponent } from "./app/articles";
import { ArticlesModule} from "./app/articles/articles.module";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import "hammerjs";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => new Error(err));
