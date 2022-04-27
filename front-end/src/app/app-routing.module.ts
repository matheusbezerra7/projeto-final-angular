import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/ui/home/home.component';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {
    path: 'conta',
    loadChildren: () => import('./componentes/conta/conta.module')
    .then(m => m.ContaModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./componentes/fornecedor/fornecedor.module')
      .then(m => m.FornecedorModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./componentes/produto/produto.module')
      .then(m => m.ProdutoModule)
  },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
