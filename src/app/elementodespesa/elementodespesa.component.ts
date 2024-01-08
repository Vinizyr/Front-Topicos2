import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementodespesaService } from './elementodespesa.service';

export interface Elementodespesa {
  id?: number,
  nome: string,
  codigo: number
}

@Component({
  selector: 'app-elementodespesa',
  templateUrl: './elementodespesa.component.html',
  styleUrl: './elementodespesa.component.css'
})
export class ElementodespesaComponent implements OnInit {

  elementodespesas = new Observable<Elementodespesa[]>;

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

   constructor(private elementodespesasService: ElementodespesaService) {}

   ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de solicitantes
    this.refresh();
  }

  refresh() {
    //indo no banco e trazendo a lista de solicitantes
    this.elementodespesas = this.elementodespesasService.get();
  }

  //novo solicitante
  adicionar() {
    if (!this.nome || !this.codigo || this.codigo <= 0) {
      alert("O nome ou código não pode ser nulo.")
      return
    }
    this.elementodespesasService.post({nome: this.nome, codigo: this.codigo}).subscribe(_ => this.refresh())
    this.nome = ''
    this.codigo = 0
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.elementodespesasService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o solicitante da linha que foi clicado para o modal e mostra os dados
  modalEditar(elementodespesas: Elementodespesa){
    this.abrirModal = true;
    this.nomeEdit = elementodespesas.nome
    this.id = elementodespesas.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(elementodespesas: Elementodespesa){
    this.abrirModalExcluir = true;
    this.nomeDel = elementodespesas.nome
    this.id = elementodespesas.id

  }


  excluir(id: any) {
    this.id = id
    this.elementodespesasService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
