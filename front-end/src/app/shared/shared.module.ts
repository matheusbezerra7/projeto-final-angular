import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./ui/footer/footer.component";
import { HomeComponent } from "./ui/home/home.component";
import { MenuComponent } from "./ui/menu/menu.component";
import { NotFoundComponent } from "./ui/not-found/not-found.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLoginComponent } from "./ui/menu-login/menu-login.component";


const uiComponents = [
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenuLoginComponent,
    NotFoundComponent
]

@NgModule({
    declarations: [
        ...uiComponents
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        ...uiComponents
    ]
})
export class SharedModule { }