import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CoronaService } from "./corona.service";
import { BehaviorSubject } from "rxjs";
import { SearchBar } from "tns-core-modules/ui/search-bar";


@Component({
    selector: "ns-items",
    templateUrl: "./corona.component.html",

})
export class CoronaComponent implements OnInit {
    $coronas: BehaviorSubject<Array<any>>;
    coronas = [];
    idxstart = 0;
    dialogOpen = false;


    constructor(private cs: CoronaService,private route: ActivatedRoute) {
        this.$coronas = new BehaviorSubject([]);
    }

    ngOnInit(): void {


        this.cs.getCoronas().subscribe(
            (response: any) => {
                this.coronas.push(...response);
                this.$coronas.next(this.coronas);
                //console.log(this.coronas);
            },
            (err) => console.log(err)
        );


    }



    loadMore() {
        console.log("called");
        if (this.coronas.length <= 0) return;
        this.idxstart += 20;
        this.cs.getCoronas(this.idxstart).subscribe((response: any) => {
            if (response) {
                this.coronas.push(...response);
                this.$coronas.next(this.coronas);
                //console.log(this.coronas);
            }
        });
    }

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }

    loadedSB(args) {
        setTimeout(() => {
            args.object.dismissSoftInput();
        }, 200)

    }

}


