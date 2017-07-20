import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* service */
import { SearchthemeService } from 'app/services/searchtheme.service';
/* Router*/
import { RouterModule } from '@angular/router';

/* composant*/
import { HomeComponent } from 'app/layouts/home/home.component';
import { SearchformComponent } from 'app/components/searchform/searchform.component';



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
    HomeComponent,
     SearchformComponent

  ],
  providers: [
    FormBuilder,
    SearchthemeService
  ]

})
export class HomeModule { }
