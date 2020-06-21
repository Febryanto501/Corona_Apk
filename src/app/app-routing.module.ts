import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CoronaComponent } from "./corona/corona.component";
import { CoronaDetailComponent } from "./corona/corona-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";
import { TipsComponent } from "./tips/tips.component";
import { CovidComponent } from "./covid/covid.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    // shell component akan membungkus semua halaman yang menggunakan sidedrawer
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "corona", component: CoronaComponent },
            { path: "corona/:country", component: CoronaDetailComponent },
            { path: "about", component: AboutComponent },
            { path: "tips", component: TipsComponent },
            { path: "covid", component: CovidComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
