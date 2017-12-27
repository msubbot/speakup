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
    articlesData: Article[];
    articlesShowed: Article[];
    searchField: string;

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
                        text: article.Text
                    };
                });
            })
            .then(response => {
                this.articlesData = response as Article[];
                this.articlesShowed = this.articlesData;
            })
            .catch(console.log);
    }

    searchArticles(event?) {
        if (this.searchField === "" || this.searchField === undefined) {
            this.articlesShowed = this.articlesData;
            return;
        }
        this.articlesShowed = this.articlesData;
        this.articlesShowed = this.articlesShowed.filter(article => {
            return article.title.toLocaleLowerCase().indexOf(this.searchField.toLocaleLowerCase()) !== -1;
        });
    }
}
