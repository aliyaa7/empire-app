import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Router*/
import { RouterModule } from '@angular/router';
/* composant */
import { ContactComponent } from 'app/layouts/contact/contact.component'


@NgModule({
  imports: [
    CommonModule,

      RouterModule.forChild([
      { path: 'contact', component: ContactComponent }
    ])
  ],
  declarations: [
    ContactComponent


  ]
})
export class ContactModule { }
