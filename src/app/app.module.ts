import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


/* gridster + ngx bootstrap + colorPicker + imageUpload*/
import { GridsterModule } from 'app/gridster/gridster.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageUploadModule } from 'angular2-image-upload';
import {ColorPickerModule} from 'angular4-color-picker';

/* ------------------------ */
import { AppComponent } from './app.component';

import { ModalOptionsComponent } from 'app/modal-options/modal-options.component';
import { HomeComponent } from 'app/home/home.component';
import { MakerComponent } from './maker/maker.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maker',      component: MakerComponent},

];

@NgModule({
    declarations: [
        AppComponent,
        ModalOptionsComponent,
        HomeComponent,
        MakerComponent,
        MenuComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
        BrowserModule,
        FormsModule,
        HttpModule,
        GridsterModule,
        ModalModule.forRoot(),
        ColorPickerModule,
        ImageUploadModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
