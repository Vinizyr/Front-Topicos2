import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeorcamentariaComponent } from './unidadeorcamentaria.component'
import { tap } from 'rxjs';
import { Unidadeorcamentaria } from './unidadeorcamentaria.component';

@Injectable({
  providedIn: 'root'
})
export class UnidadeorcamentariaService {

  private readonly apiUrl = 'api/te2/unidades-orcamentarias'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Unidadeorcamentaria[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Unidadeorcamentaria) {
    console.log(item)
    return this.http.post<Unidadeorcamentaria>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
