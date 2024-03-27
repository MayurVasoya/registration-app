import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let users : User[] = [
      {id:1, title: 'mr', firstName: 'Mike', lastName: 'Patel', dob: '2000-05-25', email: 'mikepatel885@gmail.com', password: '123456', ecceptTerms: true},
      {id:2, title: 'mr', firstName: 'Mitul', lastName: 'Patel', dob: '1994-05-25', email: 'mitulpatelce@gmail.com', password: '123456', ecceptTerms: true},
      {id:3, title: 'miss', firstName: 'Pooja', lastName: 'Patel', dob: '2008-05-25', email: 'poojapatel885@gmail.com', password: '12345678', ecceptTerms: true},
      {id:4, title: 'mr', firstName: 'Mehul', lastName: 'Patel', dob: '1988-05-25', email: 'mehulpatel885@gmail.com', password: '123456', ecceptTerms: true},
      {id:5, title: 'mr', firstName: 'Sailesh', lastName: 'Patel', dob: '2000-05-25', email: 'spatel885@gmail.com', password: '123456', ecceptTerms: true},
      {id:6, title: 'mr', firstName: 'Jeet', lastName: 'Patel', dob: '2000-05-25', email: 'jeet885@gmail.com', password: '123456', ecceptTerms: true}
    ];
    return { users };
  }
}
