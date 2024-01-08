import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Lancamento } from './lancamentos.component';

@Injectable({
  providedIn: 'root'
})
export class Lancamentoservice {

  private readonly apiUrl = 'api/te2/lancamentos'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Lancamento[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Lancamento) {
    console.log(item)
    return this.http.post<Lancamento>(`${this.apiUrl}`, item);
  }

  update(id: any, body: any){
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
