import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  public getPublication(){
    return this.http.get('http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8');
  }

  public getAuthor(){
    return this.http.get('http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6');
  }
}
