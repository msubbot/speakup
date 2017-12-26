import { Component, Input } from "@angular/core";

type Speech = {
    username: string;
    selectedSpeechType: string;
    speechResult: string;
    date: string;
};

@Component({
    selector: "sr-speech-results",
    templateUrl: "./speech-results.component.html",
    styleUrls: ["./speech-results.component.css"]
})
export class SpeechResultsComponent {
    @Input() speeches: any;
}
