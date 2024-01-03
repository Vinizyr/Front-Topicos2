import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { ObjetivoEstrategicoComponent } from './objetivo-estrategico/objetivo-estrategico.component';
import { GrupoDespesaComponent } from './grupo-despesa/grupo-despesa.component';
import { ModalidadeAplicacaoComponent } from './modalidade-aplicacao/modalidade-aplicacao.component';
import { TipoTransacaoComponent } from './tipo-transacao/tipo-transacao.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    SolicitanteComponent,
    ObjetivoEstrategicoComponent,
    GrupoDespesaComponent,
    ModalidadeAplicacaoComponent,
    TipoTransacaoComponent,
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
