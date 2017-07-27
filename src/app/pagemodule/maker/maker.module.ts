import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular2gridster';
import { FormsModule} from '@angular/forms';
/* router */
import { RouterModule } from '@angular/router';

/* composant */
import { MakerComponent } from 'app/layouts/maker/maker.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'maker', component: MakerComponent }
    ]),
    GridsterModule
  ],
  declarations: [
    MakerComponent
  ]
})
export class MakerModule { }
