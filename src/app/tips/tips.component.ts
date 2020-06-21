import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "tips",
    templateUrl: "tips.component.html",
})
export class TipsComponent implements OnInit {
    constructor(private page: Page) {
        page.actionBarHidden = false;
    }

    ngOnInit() {}
}
