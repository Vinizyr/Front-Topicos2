import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipolancamentoService } from './tipolancamento.service'
import { Observable } from 'rxjs';



export interface Tipolancamento {
  id?: number,
  nome: string,
}

@Component({
  selector: 'app-tipolancamento',
  templateUrl: './tipolancamento.component.html',
  styleUrl: './tipolancamento.component.css'
})


export class TipolancamentoComponent implements OnInit {

  tipolancamentos = new Observable<Tipolancamento[]>;
  tipolancamentoEmEdicao: any = null;
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

  constructor(private tipolancamentoService: TipolancamentoService,
    private matDialog: MatDialog) {}

  ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de tipolancamentos
    this.refresh();
  }



  refresh() {
    //indo no banco e trazendo a lista de tipolancamentos
    this.tipolancamentos = this.tipolancamentoService.get();
  }

  //novo tipolancamento
  adicionar() {
    if (!this.nome) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.tipolancamentoService.post({nome: this.nome}).subscribe(_ => this.refresh())
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.tipolancamentoService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o tipolancamento da linha que foi clicado para o modal e mostra os dados
  modalEditar(tipolancamento: Tipolancamento){
    this.abrirModal = true;
    this.nomeEdit = tipolancamento.nome
    this.id = tipolancamento.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(tipolancamento: Tipolancamento){
    this.abrirModalExcluir = true;
    this.nomeDel = tipolancamento.nome
    this.id = tipolancamento.id

  }


  excluir(id: any) {
    this.id = id
    this.tipolancamentoService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
