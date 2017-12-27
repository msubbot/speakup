import { Component } from "@angular/core";
import { Speech } from "./dto/Speech";


@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "app";
    speechTypes = ["public", "camarades", "official", "relax"];
    options = {
        era: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        timezone: "UTC",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    selectedSpeechType: string;
    username: string;
    speechResult: string;
    speeches: Speech[] = [
        {
            username: "Harrison Ford",
            selectedSpeechType: this.speechTypes[0],
            speechPlace: "Home",
            speechAudience: "Friends",
            date: new Date().toLocaleString("en-US", this.options),
            record: true,
        },
        {
            username: "P.Poroshenko",
            selectedSpeechType: "hohol",
            speechPlace: "Church",
            speechAudience: "Politics",
            date: new Date().toLocaleString("en-US", this.options),
            record : true,
        }
    ];
}
