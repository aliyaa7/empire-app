import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  } from './app.component';

/* import lib ext */
//import { DragulaModule } from 'ng2-dragula/ng2-dragula';


/* composant principal */
import { AppComponent } from 'app/components/main/main';
/* composants */
import { MainMenuComponent} from 'app/components/menu/menu';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/* le router pour le chargement des pages */
import { RouterModule } from '@angular/router';


/* modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HomeModule } from 'app/pagemodule/home/home.module';
import { MakerModule } from 'app/pagemodule/maker/maker.module';
import { ContactModule } from 'app/pagemodule/contact/contact.module';




@NgModule({
  // A chaque ajout de composant on dois le declarer ici
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    FooterComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([]),
    //DragulaModule,
    // chargement des modules internes
    HomeModule,
    MakerModule,
    ContactModule
  ],
  providers: [],
  // bootstrap permet de dire que l'on doit charger en tout premier
  bootstrap: [AppComponent]
})
export class AppModule { }

