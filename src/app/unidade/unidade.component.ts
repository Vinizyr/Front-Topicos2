import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnidadeService } from './unidade.service'
import { Observable } from 'rxjs';



export interface Unidade {
  id?: number,
  nome: string,
}

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrl: './unidade.component.css'
})


export class UnidadeComponent implements OnInit {

  unidades = new Observable<Unidade[]>;
  unidadeEmEdicao: any = null;
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

  constructor(private unidadeService: UnidadeService,
    private matDialog: MatDialog) {}

  ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de unidades
    this.refresh();
  }



  refresh() {
    //indo no banco e trazendo a lista de unidades
    this.unidades = this.unidadeService.get();
  }

  //novo unidade
  adicionar() {
    if (!this.nome) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.unidadeService.post({nome: this.nome}).subscribe(_ => this.refresh())
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.unidadeService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o unidade da linha que foi clicado para o modal e mostra os dados
  modalEditar(unidade: Unidade){
    this.abrirModal = true;
    this.nomeEdit = unidade.nome
    this.id = unidade.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(unidade: Unidade){
    this.abrirModalExcluir = true;
    this.nomeDel = unidade.nome
    this.id = unidade.id

  }


  excluir(id: any) {
    this.id = id
    this.unidadeService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
