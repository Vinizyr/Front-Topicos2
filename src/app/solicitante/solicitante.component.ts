import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SolicitanteService } from './solicitante.service'
import { Observable } from 'rxjs';



export interface Solicitante {
  id?: number,
  nome: string
}

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrl: './solicitante.component.css'
})


export class SolicitanteComponent implements OnInit {

  solicitantes = new Observable<Solicitante[]>;

  //Formulário criar
  nome: string = '';
  id?: number = 0;
  //Formulário editar
  idEdit?: number = 0;
  nomeEdit: string = '';
  //Formulário excluir
  nomeDel: string = '';

  //var p abrir o modal
  abrirModal = false;
  abrirModalExcluir = false;

  constructor(private solicitanteService: SolicitanteService,
    private matDialog: MatDialog) {}

  ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de solicitantes
    this.refresh();
  }



  refresh() {
    //indo no banco e trazendo a lista de solicitantes
    this.solicitantes = this.solicitanteService.get();
  }

  //novo solicitante
  adicionar() {
    if (!this.nome) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.solicitanteService.post({nome: this.nome}).subscribe(_ => this.refresh())
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.solicitanteService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o solicitante da linha que foi clicado para o modal e mostra os dados
  modalEditar(solicitante: Solicitante){
    this.abrirModal = true;
    this.nomeEdit = solicitante.nome
    this.id = solicitante.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(solicitante: Solicitante){
    this.abrirModalExcluir = true;
    this.nomeDel = solicitante.nome
    this.id = solicitante.id

  }


  excluir(id: any) {
    this.id = id
    this.solicitanteService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
