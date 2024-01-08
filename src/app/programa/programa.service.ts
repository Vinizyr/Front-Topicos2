import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramaComponent } from '../programa/programa.component'
import { tap } from 'rxjs';
import { Programa } from './programa.component';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  private readonly apiUrl = 'api/te2/programas'
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Programa[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: Programa) {
    console.log(item)
    return this.http.post<Programa>(`${this.apiUrl}`, item);
  }

  update(id: any, nome: string){
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
