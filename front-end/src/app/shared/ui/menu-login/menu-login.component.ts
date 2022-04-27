import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageUtils } from "../../utils/localstorage";



@Component({
    selector: 'app-menu-login',
    templateUrl: './menu-login.component.html'
})
export class MenuLoginComponent {

    token: string = "";
    user: any;
    email: string = "";
    localStorage = new LocalStorageUtils();

    constructor(private router: Router){}

    usuarioLogado(): boolean {
        this.token = this.localStorage.obterTokenUsuario();
        this.user = this.localStorage.obterUsuario();

        if(this.user)
            this.email = this.user.email;

        return this.token !== null;
    }

    logout() {
        this.localStorage.limparDadosLocaisUsuario();
        this.router.navigate(['/home'])
    }
}