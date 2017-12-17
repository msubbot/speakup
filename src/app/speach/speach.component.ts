import { Component, Input } from "@angular/core";

type Speach = {
  username: string;
  selectedSpeachType: string;
  speachResult: string;
  date: string;
};

@Component({
  selector: "sr-speach",
  templateUrl: "./speach.component.html",
  styleUrls: ["./speach.component.css"]
})
export class SpeachComponent {
  @Input() username: string;
  @Input() selectedSpeachType: string;
  @Input() speachResult: string;
  @Input() speachResults: string[];
  @Input() speachTypes: string[];
  @Input() speaches: Speach[];

  isValidSpeach() {
    return (
      this.username !== undefined &&
      this.selectedSpeachType !== undefined &&
      this.speachResult !== undefined
    );
  }

  addSpeach() {
    if (this.isValidSpeach()) {
      const newSpeach: Speach = {
        username: this.username,
        selectedSpeachType: this.selectedSpeachType,
        speachResult: this.speachResult,
        date: new Date().toLocaleString("en-US", this.options)
      };
      this.speaches.push(newSpeach);
    }
  }

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
}
