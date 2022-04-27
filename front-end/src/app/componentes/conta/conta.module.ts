import { ContaGuard } from './services/conta.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'


import { ContaAppComponent } from './contas.app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaRoutingModule } from './conta.route';
import { ContaService } from './services/conta.service';
import { CustomFormsModule } from 'ng2-validation';



@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ContaRoutingModule
  ],
  providers: [
    ContaService,
    ContaGuard
  ]
})
export class ContaModule { }
