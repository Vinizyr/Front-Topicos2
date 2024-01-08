import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipotransacaoService } from './tipotransacao.service'
import { Observable } from 'rxjs';



export interface Tipotransacao {
  id?: number,
  nome: string,
}

@Component({
  selector: 'app-tipotransacao',
  templateUrl: './tipotransacao.component.html',
  styleUrl: './tipotransacao.component.css'
})


export class TipotransacaoComponent implements OnInit {

  tipotransacaos = new Observable<Tipotransacao[]>;
  tipotransacaoEmEdicao: any = null;
  displayedColumns: string[] = ['Nome', 'Editar', 'Excluir','Teste'];

  //Formulário criar
  nome: string = '';
  id?: number = 0;
  //Formulário editar
  idEdit?: number = 0;
  nomeEdit: string = '';
  testeEdit: string = '';
  //Formulário excluir
  nomeDel: string = '';

  //var p abrir o modal
  abrirModal = false;
  abrirModalExcluir = false;

  constructor(private tipotransacaoService: TipotransacaoService,
    private matDialog: MatDialog) {}

  ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de tipotransacaos
    this.refresh();
  }



  refresh() {
    //indo no banco e trazendo a lista de tipotransacaos
    this.tipotransacaos = this.tipotransacaoService.get();
  }

  //novo tipotransacao
  adicionar() {
    if (!this.nome) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.tipotransacaoService.post({nome: this.nome}).subscribe(_ => this.refresh())
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.tipotransacaoService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o tipotransacao da linha que foi clicado para o modal e mostra os dados
  modalEditar(tipotransacao: Tipotransacao){
    this.abrirModal = true;
    this.nomeEdit = tipotransacao.nome
    this.id = tipotransacao.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(tipotransacao: Tipotransacao){
    this.abrirModalExcluir = true;
    this.nomeDel = tipotransacao.nome
    this.id = tipotransacao.id

  }


  excluir(id: any) {
    this.id = id
    this.tipotransacaoService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
