import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ioa-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export default class MenuComponent {

    @Input() userName: string;
    @Output() onLogout: EventEmitter<void> 

    constructor() {
        this.userName = "";
        this.onLogout = new EventEmitter();
    }

    logout(): void {
        this.onLogout.emit();
    }
}