import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipolancamentoRoutingModule } from './solicitante-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipolancamentoRoutingModule,
    MatTableModule,
    MatInputModule
  ]
})
export class TipolancamentoModule { }
