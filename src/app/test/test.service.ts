import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient) { }
  
  login(){
    const url='/asswets/employees.json'
    return this.httpClient.get(url)
  }
 }
