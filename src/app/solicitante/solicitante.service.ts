import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  private readonly apiUrl = 'api/te2/solicitante'
  constructor(private http: HttpClient) { }

  get(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(tap(dados => console.log(dados)))
  }

  post(item: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}`, item);
  }

  update(id: number, nome: string): Observable<any> {
    const body = { nome };
    return this.http.put<any>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
