import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { TipoTransacaoComponent } from './tipo-transacao/tipo-transacao.component';
import { ObjetivoEstrategicoComponent } from './objetivo-estrategico/objetivo-estrategico.component';
import { ModalidadeAplicacaoComponent } from './modalidade-aplicacao/modalidade-aplicacao.component';
import { GrupoDespesaComponent } from './grupo-despesa/grupo-despesa.component';

const routes: Routes = [
  {path: 'solicitante', component: SolicitanteComponent },
  {path: 'tipo-transacao', component: TipoTransacaoComponent},
  {path: 'objetivo-estrategico', component: ObjetivoEstrategicoComponent},
  {path: 'modalidade-aplicacao', component: ModalidadeAplicacaoComponent},
  {path: 'grupo-despesa', component: GrupoDespesaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
