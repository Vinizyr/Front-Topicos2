import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcaoService } from './acao.service';

export interface Acao {
  id?: number,
  nome: string,
  codigo: number
}

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrl: './acao.component.css'
})
export class AcaoComponent implements OnInit {

  acaos = new Observable<Acao[]>;

   //Formulário criar
   nome: string = '';
   codigo: number = 0;
   id?: number = 0;
   //Formulário editar
   idEdit?: number = 0;
   nomeEdit: string = '';
   //Formulário excluir
   nomeDel: string = '';

   //var p abrir o modal
   abrirModal = false;
   abrirModalExcluir = false;

   constructor(private acaosService: AcaoService) {}

   ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de solicitantes
    this.refresh();
  }

  refresh() {
    //indo no banco e trazendo a lista de solicitantes
    this.acaos = this.acaosService.get();
  }

  //novo solicitante
  adicionar() {
    if (!this.nome || !this.codigo || this.codigo <= 0) {
      alert("O nome ou código não pode ser nulo.")
      return
    }
    this.acaosService.post({nome: this.nome, codigo: this.codigo}).subscribe(_ => this.refresh())
    this.nome = ''
    this.codigo = 0
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.acaosService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o solicitante da linha que foi clicado para o modal e mostra os dados
  modalEditar(acaos: Acao){
    this.abrirModal = true;
    this.nomeEdit = acaos.nome
    this.id = acaos.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(acaos: Acao){
    this.abrirModalExcluir = true;
    this.nomeDel = acaos.nome
    this.id = acaos.id

  }


  excluir(id: any) {
    this.id = id
    this.acaosService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
