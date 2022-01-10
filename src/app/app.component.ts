import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { FirebaseDatabaseService } from './services/firebase-database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  items : any[] = [];
  constructor(afDb:AngularFireDatabase, private db : FirebaseDatabaseService) {

    this.db.getValues()
    .subscribe(
      (res)=>
      {
        this.items = res;
        console.log('FIREBASE', res);
      },
      (err)=>
      {
        console.log('ERROR', err);
      });
  }
}
