import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  getrepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(`https://api.github.com/search/repositories?q=bootstrap`);
  }

  getreposById(personid: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`https://localhost:44301/Person/` + personid);
  }
}
