import { Component } from "@angular/core";

type Speach = {
  username: string;
  selectedSpeachType: string;
  speachResult: string;
  date: string;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
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
  title = "app";
  speachTypes = ["public", "camarades", "official", "relax"];
  speachResults = ["good", "not good", "bad", "bad like your mama"];
  selectedSpeachType: string;
  username: string;
  speachResult: string;
  speaches: Speach[] = [
    {
      username: "Harrison Ford",
      selectedSpeachType: this.speachTypes[0],
      speachResult: this.speachResults[0],
      date: new Date().toLocaleString("en-US", this.options)
    },
    {
      username: "P.Poroshenko",
      selectedSpeachType: "hohol",
      speachResult: "slava for the ukraine",
      date: new Date().toLocaleString("en-US", this.options)
    },
  ];

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

  articles = [
    {
      title: "top way to get top speaker only for 0.99$",
      text: "im joking, it cost 100$",
      picture: "../assets/pics/pic.jpg",
      description: "some butiful article"
    },
    {
      title: "A.Damboldor: Lie or Die",
      text: "im joking, it cost 10000$",
      picture: "../assets/pics/pic.jpg",
      description: "some butiful article"
    },
    {
      title: "3 ways to speak like D.Trump",
      text: "im joking, it cost 1000$",
      picture: "../assets/pics/pic.jpg",
      description: "some butiful article"
    },
    {
      title: "Nothing is free, exept your words",
      text: "im joking, it cost 10000$",
      picture: "../assets/pics/pic.jpg",
      description: "some butiful article"
    }
  ];

}
