import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
/* router */
import { RouterModule, Route } from '@angular/router';

/* composant */
import { MakerComponent } from 'app/maker/maker.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'maker', component: MakerComponent }
    ]),

  ],
  declarations: [
    MakerComponent
  ]
})
export class MakerModule { }
