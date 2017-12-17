import { Component, Input } from "@angular/core";

@Component({
    selector: "sr-articles",
    templateUrl: "./articles.component.html",
    styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent {
    @Input() articles: any;
}
