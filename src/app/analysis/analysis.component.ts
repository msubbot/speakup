import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SWAGGER_API_HOST } from "../config";
import { Analyse } from "../dto/Analyse";
@Component({
    selector: "sr-analysis",
    templateUrl: "./analysis.component.html",
    styleUrls: ["./analysis.component.css"]
})
export class AnalysisComponent {
    analyse;

    constructor(private httpClient: HttpClient) {
        this.httpClient
            .get(SWAGGER_API_HOST + "/analysis")
            .toPromise()
            .then(response => {
                this.analyse = response as Analyse;
            })
            .catch(console.log);
    }

}
