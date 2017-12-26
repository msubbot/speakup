import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ArticlesModule } from "./articles/articles.module";
import { ArticlesComponent } from "./articles/articles.component";
import { SpeechComponent } from "./speech/speech.component";
import { SpeechResultsComponent } from "./speech-results/speech-results.component";

import "hammerjs";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SpeechComponent,
    SpeechResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
