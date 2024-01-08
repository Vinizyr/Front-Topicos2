import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { TipotransacaoComponent } from './tipotransacao/tipotransacao.component';
import { ObjetivoestrategicoComponent } from './objetivoestrategico/objetivoestrategico.component';
import { ModalidadeAplicacaoComponent } from './modalidade-aplicacao/modalidade-aplicacao.component';
import { GrupoDespesaComponent } from './grupo-despesa/grupo-despesa.component';
import { HomeComponent } from './home/home.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { LancamentoComponent } from './lancamentos/lancamentos.component';
import { TipolancamentoComponent } from './tipolancamento/tipolancamento.component';
import { ProgramaComponent } from './programa/programa.component';
import { AcaoComponent } from './acao/acao.component';
import { ElementodespesaComponent } from './elementodespesa/elementodespesa.component';
import { UnidadeorcamentariaComponent } from './unidadeorcamentaria/unidadeorcamentaria.component';

const routes: Routes = [
  {path: 'solicitante', component: SolicitanteComponent },
  {path: 'tipo-transacao', component: TipotransacaoComponent},
  {path: 'objetivo-estrategico', component: ObjetivoestrategicoComponent},
  {path: 'modalidade-aplicacao', component: ModalidadeAplicacaoComponent},
  {path: 'grupo-despesa', component: GrupoDespesaComponent},
  {path: 'unidade', component: UnidadeComponent},
  {path: 'programa', component: ProgramaComponent},
  {path: 'acao', component: AcaoComponent},
  {path: 'elementodespesa', component: ElementodespesaComponent},
  {path: 'unidadeorcamentaria', component: UnidadeorcamentariaComponent},
  {path: 'tipolancamento', component: TipolancamentoComponent},
  {path: 'lancamento', component: LancamentoComponent},
  {path: '', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
