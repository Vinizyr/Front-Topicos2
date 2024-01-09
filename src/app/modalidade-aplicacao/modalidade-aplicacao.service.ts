import { Injectable } from '@angular/core';
import { ModalidadeAplicacao } from './modalidade-aplicacao.component';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeAplicacaoService {

  private readonly apiUrl = 'api/te2/modalidade-aplicacao'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<ModalidadeAplicacao[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: ModalidadeAplicacao) {
    console.log(item)
    return this.http.post<ModalidadeAplicacao>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    console.log(id)
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
