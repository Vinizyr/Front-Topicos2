import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Tipolancamento } from './tipolancamento.component';

@Injectable({
  providedIn: 'root'
})
export class TipolancamentoService {

  private readonly apiUrl = 'api/te2/tipo-lancamentos'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Tipolancamento[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Tipolancamento) {
    console.log(item)
    return this.http.post<Tipolancamento>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
