import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Tipotransacao } from './tipotransacao.component';

@Injectable({
  providedIn: 'root'
})
export class TipotransacaoService {

  private readonly apiUrl = 'api/te2/tipo-transacao'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Tipotransacao[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Tipotransacao) {
    console.log(item)
    return this.http.post<Tipotransacao>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
