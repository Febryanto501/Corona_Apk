import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

@Component({
    selector: "covid",
    templateUrl: "covid.component.html",
})
export class CovidComponent implements OnInit {
    constructor(private page: Page) {
        page.actionBarHidden = false;
    }

    onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
        let newIndex = args.newIndex;
    }

    ngOnInit() {}
}

