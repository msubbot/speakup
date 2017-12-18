import { Component, Input } from "@angular/core";

type Speach = {
    username: string;
    selectedSpeachType: string;
    speachResult: string;
    date: string;
};

@Component({
    selector: "sr-speach-results",
    templateUrl: "./speach-results.component.html",
    styleUrls: ["./speach-results.component.css"]
})
export class SpeachResultsComponent {
    @Input() speaches: any;
}
