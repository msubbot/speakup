import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ArticlesComponent } from "./articles/articles.component";
import { SpeechComponent } from "./speech/speech.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { HistoryComponent } from "./history/history.component";

import "hammerjs";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        ArticlesComponent,
        SpeechComponent,
        AnalysisComponent,
        HistoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
