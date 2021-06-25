import { Component, Input } from "@angular/core";

@Component({
    selector: 'ioa-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export default class LoadingComponent {

    @Input() isLoading: boolean;

    constructor() {
        this.isLoading = false;
    }
}