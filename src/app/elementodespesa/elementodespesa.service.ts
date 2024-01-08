import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementodespesaComponent } from './elementodespesa.component'
import { tap } from 'rxjs';
import { Elementodespesa } from './elementodespesa.component';

@Injectable({
  providedIn: 'root'
})
export class ElementodespesaService {

  private readonly apiUrl = 'api/te2/elementos-despesa'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Elementodespesa[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Elementodespesa) {
    console.log(item)
    return this.http.post<Elementodespesa>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
