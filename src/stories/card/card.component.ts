import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'story-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export default class CardComponent {

    @Input() imageUrl: string;
    @Input() title: string;
    @Input() authors: Array<string>;
    @Input() pageCount: string;
    @Input() publisher: string;
    @Input() published: string;

    constructor() {
        this.title = "";
        this.authors = [""];
        this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6zKQpZZlZy4RnkXeMXslIklt9aZQdvLavA&usqp=CAU';
    
        this.pageCount = "";
        this.publisher = "";
        this.published = "";
    }
}