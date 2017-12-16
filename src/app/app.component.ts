import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  selectedSpeachType: string;
  username: string;

  speachTypes = [
    "public",
    "camarades",
    "official",
    "relax"
  ];

  articles = [
    {
      title: "top way to get top speaker only for 0.99$",
      text: "im joking, it cost 100$",
      picture: "../assets/pics/pic.jpg"
    },
    {
      title: "top way to get top speaker only for 0.99$",
      text: "im joking, it cost 10000$",
      picture: "../assets/pics/pic.jpg"
    },
    {
      title: "top way to get top speaker only for 0.99$",
      text: "im joking, it cost 1000$",
      picture: "../assets/pics/pic.jpg"
    },
    {
      title: "top way to get top speaker only for 0.99$",
      text: "im joking, it cost 10000$",
      picture: "../assets/pics/pic.jpg"
    }
  ];
}
