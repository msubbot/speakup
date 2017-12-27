import { Component, Input } from "@angular/core";
import { Speech } from "../dto/Speech";

@Component({
    selector: "sr-speech",
    templateUrl: "./speech.component.html",
    styleUrls: ["./speech.component.css"]
})
export class SpeechComponent {
    speechTypes = ["good", "not good", "bad", "not bad", "awesome"];
    speechAudiences = ["Politics", "Sudents", "Friends", "Camunisti"];
    speechPlaces = ["Home", "Office", "Church", "School"];
    @Input() username: string = "admin";
    @Input() speeches: Speech[];

    selectedSpeechType: string;
    selectedSpeechPlace: string;
    selectedSpeechAudience: string;

    isRecording: boolean = false;
    recordExist: boolean = false;

    isValidSpeech() {
        return (
            this.selectedSpeechPlace !== undefined &&
            this.selectedSpeechAudience !== undefined &&
            this.selectedSpeechType !== undefined &&
            this.recordExist
        );
    }

    recordSpeech() {
        this.isRecording = true;
    }

    endRecording() {
        this.isRecording = false;
        this.recordExist = true;
    }

    addSpeech() {
        if (this.isValidSpeech()) {
            const newSpeech: Speech = {
                username: this.username,
                selectedSpeechType: this.selectedSpeechType,
                speechPlace: this.selectedSpeechPlace,
                speechAudience: this.selectedSpeechAudience,
                date: new Date().toLocaleString("en-US", this.timeOptions),
                record: true
            };
            this.speeches.push(newSpeech);
        }
    }

    timeOptions = {
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
}
