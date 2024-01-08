import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lancamentoservice } from './lancamentos.service';
import { Observable } from 'rxjs';

export interface Lancamento {
  id?: number;
  descricao: string;
  valor: number;
  contratado: string;
  dataLancamento: Date;
  ged: string;
  lancamentoInvalido: boolean;
  numeroLancamento: number;
  idTipoLancamento: number;
  idUnidade: number;
  idUnidadeOrcamentaria: number;
  idElementoDespesa: number;
  idAcao: number;
  idPrograma: number;
  idLancamentoPai: number;
  idFonteRecurso: number;
  idSolicitante: number;
  idObjetivoEstrategico: number;
  idGrupoDespesa: number;
  idModalidadeAplicacao: number;
  idTipoTransacao: number;
  anoOrcamento: number;
}

@Component({
  selector: 'app-Lancamento',
  templateUrl: './lancamentos.component.html',
  styleUrl: './lancamentos.component.css',
})
export class LancamentoComponent implements OnInit {
  Lancamentos = new Observable<Lancamento[]>();
  LancamentoEmEdicao: any = null;
  displayedColumns: string[] = [
    'Descrição',
    'Valor',
    'Contratado',
    'DataLancamento',
    'Ged',
    'LancamentoInvalido',
    'NumeroLancamento',
    'IdTipoLancamento',
    'IdUnidade',
    'IdUnidadeOrcamentaria',
    'IdElementoDespesa',
    'IdAcao',
    'IdPrograma',
    'IdLancamentoPai',
    'IdFonteRecurso',
    'IdSolicitante',
    'IdObjetivoEstrategico',
    'IdGrupoDespesa',
    'IdModalidadeAplicacao',
    'IdTipoTransacao',
    'AnoOrcamento',
    'Editar',
    'Excluir',
  ];

  //Formulário criar
  descricao: string = '';
  id?: number = 0;
  valor?: number;
  contratado?: string;
  dataLancamento?: Date;
  ged?: string;
  lancamentoInvalido?: boolean = false;
  numeroLancamento?: number;
  idTipoLancamento?: number;
  idUnidade?: number;
  idUnidadeOrcamentaria?: number;
  idElementoDespesa?: number;
  idAcao?: number;
  idPrograma?: number;
  idLancamentoPai?: number;
  idFonteRecurso?: number;
  idSolicitante?: number;
  idObjetivoEstrategico?: number;
  idGrupoDespesa?: number;
  idModalidadeAplicacao?: number;
  idTipoTransacao?: number;
  anoOrcamento?: number;

  valorEdit?: number;
  contratadoEdit?: string;
  dataLancamentoEdit?: Date;
  gedEdit?: string;
  lancamentoInvalidoEdit?: boolean = false;
  numeroLancamentoEdit?: number;
  idTipoLancamentoEdit?: number;
  idUnidadeEdit?: number;
  idUnidadeOrcamentariaEdit?: number;
  idElementoDespesaEdit?: number;
  idAcaoEdit?: number;
  idProgramaEdit?: number;
  idLancamentoPaiEdit?: number;
  idFonteRecursoEdit?: number;
  idSolicitanteEdit?: number;
  idObjetivoEstrategicoEdit?: number;
  idGrupoDespesaEdit?: number;
  idModalidadeAplicacaoEdit?: number;
  idTipoTransacaoEdit?: number;
  anoOrcamentoEdit?: number;
  //Formulário editar
  idEdit?: number = 0;
  descricaoEdit: string = '';

  //Formulário excluir
  nomeDel: string = '';

  //var p abrir o modal
  abrirModal = false;
  abrirModalExcluir = false;

  constructor(
    private Lancamentoservice: Lancamentoservice,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    //quando entrar na página(onInit)
    //ele vai exexutar esse método que traz a lista de Lancamentos
    this.refresh();
  }

  refresh() {
    //indo no banco e trazendo a lista de Lancamentos
    this.Lancamentos = this.Lancamentoservice.get();
  }

  //novo Lancamento
  adicionar() {
    const body = {
      descricao: this.descricao,
      valor: this.valor,
      contratado: this.contratado,
      dataLancamento: this.dataLancamento
        ? new Date(this.dataLancamento)
            .toLocaleString('pt-BR')
            .replaceAll('-', '/')
            .split(',')[0]
        : null,
      ged: this.ged,
      lancamentoInvalido: this.lancamentoInvalido,
      numeroLancamento: this.numeroLancamento,
      idTipoLancamento: this.idTipoLancamento,
      idUnidade: this.idUnidade,
      idUnidadeOrcamentaria: this.idUnidadeOrcamentaria,
      idElementoDespesa: this.idElementoDespesa,
      idAcao: this.idAcao,
      idPrograma: this.idPrograma,
      idLancamentoPai: this.idLancamentoPai,
      idFonteRecurso: this.idFonteRecurso,
      idSolicitante: this.idSolicitante,
      idObjetivoEstrategico: this.idObjetivoEstrategico,
      idGrupoDespesa: this.idGrupoDespesa,
      idModalidadeAplicacao: this.idModalidadeAplicacao,
      idTipoTransacao: this.idTipoTransacao,
      anoOrcamento: this.anoOrcamento,
    };

    for (let k of Object.keys(body)) {
      if (!(body as any)[k] && typeof (this as any)[k] != 'boolean') {
        alert(`${k.replace('id', '')} não pode ser nulo.`);
        return;
      }
    }

    this.Lancamentoservice.post(body as any).subscribe((_) => this.refresh());
  }

  editar(id: any) {
    this.idEdit = id;

    const body = {
      descricao: this.descricaoEdit,
      contratado: this.contratadoEdit,
      ged: this.gedEdit,
      lancamentoInvalido: this.lancamentoInvalidoEdit || false,
    };

    for (let k of Object.keys(body)) {
      if (!(body as any)[k] && typeof (this as any)[k] != 'boolean') {
        alert(`${k.replace('id', '')} não pode ser nulo.`);
        return;
      }
    }
    this.Lancamentoservice.update(this.idEdit, body).subscribe(
      (_) => this.refresh()
    );
    this.abrirModal = false;
  }

  //Aqui passa o Lancamento da linha que foi clicado para o modal e mostra os dados
  modalEditar(Lancamento: Lancamento) {

    this.descricaoEdit = Lancamento.descricao;
    this.contratadoEdit = Lancamento.contratado;
    this.gedEdit = Lancamento.ged;
    this.lancamentoInvalidoEdit = Lancamento.lancamentoInvalido;
    this.id = Lancamento.id;

    this.abrirModal = true;
  }

  //Mesma coisa para esse só que aqui não pode editar
  //(no html tem um desabled que não deixar alterar o campo input)
  modalDelete(Lancamento: Lancamento) {
    this.abrirModalExcluir = true;
    //this.nomeDel = Lancamento.nome
    this.id = Lancamento.id;
  }

  excluir(id: any) {
    this.id = id;
    this.Lancamentoservice.delete(this.id).subscribe((_) => this.refresh());
    this.abrirModalExcluir = false;
  }
}
