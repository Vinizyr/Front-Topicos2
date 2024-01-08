import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramaService } from './programa.service';

export interface Programa {
  id?: number,
  nome: string,
  codigo: number
}

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrl: './programa.component.css'
})
export class ProgramaComponent implements OnInit {

  programas = new Observable<Programa[]>;

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

   constructor(private programasService: ProgramaService) {}

   ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de solicitantes
    this.refresh();
  }

  refresh() {
    //indo no banco e trazendo a lista de solicitantes
    this.programas = this.programasService.get();
  }

  //novo solicitante
  adicionar() {
    if (!this.nome || !this.codigo || this.codigo <= 0) {
      alert("O nome ou código não pode ser nulo.")
      return
    }
    this.programasService.post({nome: this.nome, codigo: this.codigo}).subscribe(_ => this.refresh())
    this.nome = ''
    this.codigo = 0
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.programasService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o solicitante da linha que foi clicado para o modal e mostra os dados
  modalEditar(programas: Programa){
    this.abrirModal = true;
    this.nomeEdit = programas.nome
    this.id = programas.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(programas: Programa){
    this.abrirModalExcluir = true;
    this.nomeDel = programas.nome
    this.id = programas.id

  }


  excluir(id: any) {
    this.id = id
    this.programasService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
