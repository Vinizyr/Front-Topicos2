import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { ObjetivoestrategicoComponent } from './objetivoestrategico/objetivoestrategico.component';
import { GrupoDespesaComponent } from './grupo-despesa/grupo-despesa.component';
import { ModalidadeAplicacaoComponent } from './modalidade-aplicacao/modalidade-aplicacao.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { TipotransacaoComponent } from './tipotransacao/tipotransacao.component';
import { HomeComponent } from './home/home.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { LancamentoComponent } from './lancamentos/lancamentos.component';
import { TipolancamentoComponent } from './tipolancamento/tipolancamento.component';
import { ProgramaComponent } from './programa/programa.component';
import { AcaoComponent } from './acao/acao.component';
import { ElementodespesaComponent } from './elementodespesa/elementodespesa.component';
import { UnidadeorcamentariaComponent } from './unidadeorcamentaria/unidadeorcamentaria.component';


@NgModule({
  declarations: [
    AppComponent,
    SolicitanteComponent,
    ObjetivoestrategicoComponent,
    GrupoDespesaComponent,
    ModalidadeAplicacaoComponent,
    TipotransacaoComponent,
    UnidadeComponent,
    LancamentoComponent,
    TipolancamentoComponent,
    ProgramaComponent,
    AcaoComponent,
    ElementodespesaComponent,
    UnidadeorcamentariaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [MatIcon],
  bootstrap: [AppComponent]
})
export class AppModule { }
