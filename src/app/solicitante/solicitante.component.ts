import { Component, OnInit } from '@angular/core';
import { SolicitanteService } from './solicitante.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrl: './solicitante.component.css'
})


export class SolicitanteComponent implements OnInit {

  solicitantes: any[] = [];
  novoSolicitante: string = '';

  constructor(private solicitanteService: SolicitanteService) {}

  ngOnInit() {
    //this.refresh();
  }



  refresh() {
    this.solicitanteService.get().subscribe((solicitantes) => {
      this.solicitantes = solicitantes;
    });
  }

  adicionar() {
    if (this.novoSolicitante.trim() !== '') {
      this.solicitanteService.post(this.novoSolicitante).subscribe(() => {
        this.refresh();
        this.novoSolicitante = '';
      });
    }
  }

  excluir(solicitante: any) {
    this.solicitanteService.delete(solicitante.id).subscribe(() => {
      this.refresh();
    });
  }
}
