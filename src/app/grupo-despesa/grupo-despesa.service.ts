import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GrupoDespesaComponent } from '../grupo-despesa/grupo-despesa.component'
import { tap } from 'rxjs';
import { GrupoDespesa } from './grupo-despesa.component';

@Injectable({
  providedIn: 'root'
})
export class GrupoDespesaService {

  private readonly apiUrl = 'api/te2/grupo-despesa'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<GrupoDespesa[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: GrupoDespesa) {
    console.log(item)
    return this.http.post<GrupoDespesa>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
