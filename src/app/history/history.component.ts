import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SWAGGER_API_HOST } from "../config";

@Component({
    selector: "sr-history",
    templateUrl: "./history.component.html",
    styleUrls: ["./history.component.css"]
})
export class HistoryComponent {
    @Input() speeches: any;
    speechesHistory;

    constructor(private httpClient: HttpClient) {
        this.httpClient
            .get(SWAGGER_API_HOST + "/history")
            .toPromise()
            .then(response => {
                this.speechesHistory = response;
            })
            .catch(console.log);
    }
}
