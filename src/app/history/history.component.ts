import { Component, Input } from "@angular/core";

type Speech = {
    username: string;
    selectedSpeechType: string;
    speechResult: string;
    date: string;
};

@Component({
    selector: "sr-history",
    templateUrl: "./history.component.html",
    styleUrls: ["./history.component.css"]
})
export class HistoryComponent {
    @Input() speeches: any;
}
