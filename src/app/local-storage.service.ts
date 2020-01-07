import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storageSubject = new BehaviorSubject<any>([]);
  constructor() {
    this.storageSubject.next(this.getItem());
  }

  setItem(item){
    this.storageSubject.next(item); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('teams', JSON.stringify(item));
  }

  getItem(){
    return JSON.parse(localStorage.getItem('teams'));
  }
}
