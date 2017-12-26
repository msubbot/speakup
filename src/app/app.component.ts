import { Component } from "@angular/core";

type Speech = {
    username: string;
    selectedSpeechType: string;
    speechResult: string;
    date: string;
};

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "app";
    speechTypes = ["public", "camarades", "official", "relax"];
    speechResults = ["good", "not good", "bad", "not bad", "awesome"];
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
    selectedSpeechType: string;
    username: string;
    speechResult: string;
    speeches: Speech[] = [
        {
            username: "Harrison Ford",
            selectedSpeechType: this.speechTypes[0],
            speechResult: this.speechResults[0],
            date: new Date().toLocaleString("en-US", this.options)
        },
        {
            username: "P.Poroshenko",
            selectedSpeechType: "hohol",
            speechResult: "slava for the ukraine",
            date: new Date().toLocaleString("en-US", this.options)
        },
    ];

    articles = [
        {
            title: "top way to get top speaker only for 0.99$",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque.",
            picture: "../assets/pics/pic.jpg",
            description: "some butiful article"
        },
        {
            title: "A.Damboldor: Lie or Die",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque.",
            picture: "../assets/pics/pic.jpg",
            description: "some butiful article"
        },
        {
            title: "3 ways to speak like D.Trump",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque.",
            picture: "../assets/pics/pic.jpg",
            description: "some butiful article"
        },
        {
            title: "Nothing is free, exept your words",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla erat. Etiam nec nisi quis risus viverra tristique non et ipsum. Duis molestie lobortis nibh, a varius ex semper nec. Maecenas sed maximus ipsum. Curabitur et magna a tortor mollis placerat. Aenean ornare imperdiet mauris vitae dictum. In hac habitasse platea dictumst. Proin eget cursus erat. Proin posuere ipsum at ante consequat, quis sollicitudin mi condimentum. Nam vehicula massa at dolor fermentum, a malesuada sem porttitor. Donec congue volutpat augue ac rhoncus. Pellentesque mattis tincidunt pellentesque.",
            picture: "../assets/pics/pic.jpg",
            description: "some butiful article"
        }
    ];

}
