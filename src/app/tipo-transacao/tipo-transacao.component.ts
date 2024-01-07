import { Component } from '@angular/core';

export interface TipoTransacao {
  id?: number,
  nome: string
}

@Component({
  selector: 'app-tipo-transacao',
  templateUrl: './tipo-transacao.component.html',
  styleUrl: './tipo-transacao.component.css'
})
export class TipoTransacaoComponent {

}
