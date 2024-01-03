import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Solicitante } from './solicitante.component';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  private readonly apiUrl = 'api/te2/solicitante'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Solicitante[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Solicitante) {
    console.log(item)
    return this.http.post<Solicitante>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
