import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Init import modules for firebase
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
//End import modules for firebase

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
            BrowserModule,
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireDatabaseModule
           ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
