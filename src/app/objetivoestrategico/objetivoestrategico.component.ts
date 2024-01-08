import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjetivoestrategicoService } from './objetivoestrategico.service'
import { Observable } from 'rxjs';



export interface Objetivoestrategico {
  id?: number,
  nome: string,
}

@Component({
  selector: 'app-objetivoestrategico',
  templateUrl: './objetivoestrategico.component.html',
  styleUrl: './objetivoestrategico.component.css'
})


export class ObjetivoestrategicoComponent implements OnInit {

  objetivoestrategicos = new Observable<Objetivoestrategico[]>;
  objetivoestrategicoEmEdicao: any = null;
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

  constructor(private objetivoestrategicoService: ObjetivoestrategicoService,
    private matDialog: MatDialog) {}

  ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de objetivoestrategicos
    this.refresh();
  }



  refresh() {
    //indo no banco e trazendo a lista de objetivoestrategicos
    this.objetivoestrategicos = this.objetivoestrategicoService.get();
  }

  //novo objetivoestrategico
  adicionar() {
    if (!this.nome) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.objetivoestrategicoService.post({nome: this.nome}).subscribe(_ => this.refresh())
  }


  editar(id: any) {
    this.idEdit = id
    if (!this.nomeEdit) {
      alert("O nome não pode ser nulo.")
      return
    }
    this.objetivoestrategicoService.update(this.idEdit, this.nomeEdit).subscribe(_ => this.refresh())
    this.abrirModal = false;

  }

  //Aqui passa o objetivoestrategico da linha que foi clicado para o modal e mostra os dados
  modalEditar(objetivoestrategico: Objetivoestrategico){
    this.abrirModal = true;
    this.nomeEdit = objetivoestrategico.nome
    this.id = objetivoestrategico.id

  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(objetivoestrategico: Objetivoestrategico){
    this.abrirModalExcluir = true;
    this.nomeDel = objetivoestrategico.nome
    this.id = objetivoestrategico.id

  }


  excluir(id: any) {
    this.id = id
    this.objetivoestrategicoService.delete(this.id).subscribe(_ => this.refresh());
    this.abrirModalExcluir = false
  }
}
