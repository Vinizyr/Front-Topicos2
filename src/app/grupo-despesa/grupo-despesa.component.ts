import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GrupoDespesaService } from './grupo-despesa.service';

export interface GrupoDespesa {
  id?: number,
  nome: string,
  codigo: number
}

@Component({
  selector: 'app-grupo-despesa',
  templateUrl: './grupo-despesa.component.html',
  styleUrl: './grupo-despesa.component.css'
})
export class GrupoDespesaComponent implements OnInit {

  grupoDespesa = new Observable<GrupoDespesa[]>;

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

   constructor(private grupoDespesaService: GrupoDespesaService) {}

   ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de solicitantes
    this.refresh();
  }

  refresh() {
    //indo no banco e trazendo a lista de solicitantes
    this.grupoDespesa = this.grupoDespesaService.get();
  }

  //novo solicitante
  adicionar() {
    if (!this.nome || !this.codigo || this.codigo <= 0) {
      alert("O nome ou código não pode ser nulo.")
      return
    }
    this.grupoDespesaService.post({nome: this.nome, codigo: this.codigo}).subscribe(_ => this.refresh())
    this.nome = ''
    this.codigo = 0
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.grupoDespesaService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o solicitante da linha que foi clicado para o modal e mostra os dados
  modalEditar(grupoDespesa: GrupoDespesa){
    this.abrirModal = true;
    this.nomeEdit = grupoDespesa.nome
    this.id = grupoDespesa.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(grupoDespesa: GrupoDespesa){
    this.abrirModalExcluir = true;
    this.nomeDel = grupoDespesa.nome
    this.id = grupoDespesa.id

  }


  excluir(id: any) {
    this.id = id
    this.grupoDespesaService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
