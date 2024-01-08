import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadeorcamentariaService } from './unidadeorcamentaria.service';

export interface Unidadeorcamentaria {
  id?: number,
  nome: string,
  codigo: number
}

@Component({
  selector: 'app-unidadeorcamentaria',
  templateUrl: './unidadeorcamentaria.component.html',
  styleUrl: './unidadeorcamentaria.component.css'
})
export class UnidadeorcamentariaComponent implements OnInit {

  unidadeorcamentarias = new Observable<Unidadeorcamentaria[]>;

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

   constructor(private unidadeorcamentariasService: UnidadeorcamentariaService) {}

   ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de solicitantes
    this.refresh();
  }

  refresh() {
    //indo no banco e trazendo a lista de solicitantes
    this.unidadeorcamentarias = this.unidadeorcamentariasService.get();
  }

  //novo solicitante
  adicionar() {
    if (!this.nome || !this.codigo || this.codigo <= 0) {
      alert("O nome ou código não pode ser nulo.")
      return
    }
    this.unidadeorcamentariasService.post({nome: this.nome, codigo: this.codigo}).subscribe(_ => this.refresh())
    this.nome = ''
    this.codigo = 0
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.unidadeorcamentariasService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o solicitante da linha que foi clicado para o modal e mostra os dados
  modalEditar(unidadeorcamentarias: Unidadeorcamentaria){
    this.abrirModal = true;
    this.nomeEdit = unidadeorcamentarias.nome
    this.id = unidadeorcamentarias.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(unidadeorcamentarias: Unidadeorcamentaria){
    this.abrirModalExcluir = true;
    this.nomeDel = unidadeorcamentarias.nome
    this.id = unidadeorcamentarias.id

  }


  excluir(id: any) {
    this.id = id
    this.unidadeorcamentariasService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
