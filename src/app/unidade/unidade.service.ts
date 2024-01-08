import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Unidade } from './unidade.component';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private readonly apiUrl = 'api/te2/unidades'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Unidade[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Unidade) {
    console.log(item)
    return this.http.post<Unidade>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
