import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {

  constructor(private db : AngularFireDatabase){ }
  
  itemsRef : AngularFireList<any> = this.db.list('/');
  
  getValues()
  {
   return this.itemsRef.valueChanges();
  }
}
