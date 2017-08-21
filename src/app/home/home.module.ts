import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* service */
/*import { SearchthemeService } from 'app/services/searchtheme.service';*/

/* Router*/
import { RouterModule, Route } from '@angular/router';

/* composant*/
import { HomeComponent } from 'app/home/home.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])


  ],
  declarations: [
    HomeComponent

  ],
  providers: [
    FormBuilder,
  ]

})
export class HomeModule { }
