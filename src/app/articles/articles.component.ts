import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SWAGGER_API_HOST } from "../config";
import { ArticleTransfer } from "../dto/Article";

type Article = {
    title: string;
    description: string;
    creationDate: string;
    author: string;
    text: string;
};

@Component({
    selector: "sr-articles",
    templateUrl: "./articles.component.html",
    styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent {
    articles: Article[];

    constructor(private httpClient: HttpClient) {
        this.httpClient
            .get(SWAGGER_API_HOST + "/article")
            .toPromise()
            .then(response => {
                return (response as ArticleTransfer[]).map(article => {
                    return {
                        title: article.Title,
                        description: article.Description,
                        creationDate: article.CreationDate,
                        author: article.Author,
                        text: article.Text,
                    };
                });
            })
            .then(response => {
                this.articles = response as Article[];
            })
            .catch(console.log);
    }
}
