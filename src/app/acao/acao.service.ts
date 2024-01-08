import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcaoComponent } from './acao.component'
import { tap } from 'rxjs';
import { Acao } from './acao.component';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  private readonly apiUrl = 'api/te2/acoes'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Acao[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Acao) {
    console.log(item)
    return this.http.post<Acao>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
