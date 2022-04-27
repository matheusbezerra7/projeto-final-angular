import { ContaGuard } from './services/conta.guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContaAppComponent } from "./contas.app.component";
import { LoginComponent } from "./login/login.component";


const contaRouterConfig: Routes = [
    {
        path:'', component: ContaAppComponent,
        children: [
            { path: 'cadastro', component: CadastroComponent, canActivate: [ContaGuard], canDeactivate: [ContaGuard] },
            { path: 'login', component: LoginComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule { }
