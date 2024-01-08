import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Objetivoestrategico } from './objetivoestrategico.component';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoestrategicoService {

  private readonly apiUrl = 'api/te2/objetivo-estrategico'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Objetivoestrategico[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Objetivoestrategico) {
    console.log(item)
    return this.http.post<Objetivoestrategico>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
