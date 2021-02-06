import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite, private platform: Platform) {
    if(!this.platform.is('mobileweb')) {
      this.sqlite.create({
        name: 'mentaltracker.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {

          db.executeSql('create table mt_state (first_load boolean)', [])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));

        })
        .catch(e => console.log(e));
     } else {
      console.log('using mocking api');
    }
  }
}
