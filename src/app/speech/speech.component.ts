import { Component, Input } from "@angular/core";

type Speech = {
    username: string;
    selectedSpeechType: string;
    speechResult: string;
    date: string;
    record: boolean;
};

@Component({
    selector: "sr-speech",
    templateUrl: "./speech.component.html",
    styleUrls: ["./speech.component.css"]
})
export class SpeechComponent {
    @Input() username: string;
    @Input() selectedSpeechType: string;
    @Input() speechResult: string;
    @Input() speechResults: string[];
    @Input() speechTypes: string[];
    @Input() speeches: Speech[];

    isRecording: boolean = false;
    recordExist: boolean = false;

    isValidSpeech() {
        return (
            this.username !== undefined &&
            this.selectedSpeechType !== undefined &&
            this.speechResult !== undefined && this.recordExist
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
                speechResult: this.speechResult,
                date: new Date().toLocaleString("en-US", this.timeOptions),
                record: true,
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
