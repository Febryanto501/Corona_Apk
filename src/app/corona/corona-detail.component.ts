import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CoronaService } from "./corona.service";


@Component({
    selector: "ns-details",
    templateUrl: "./corona-detail.component.html",
})
export class CoronaDetailComponent implements OnInit {
    corona;
    country;

    constructor(private cs: CoronaService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.country = this.route.snapshot.params.country;
        this.cs.getCorona(this.country).subscribe((response: any) => {
            this.corona = response;
        });
    }

}
