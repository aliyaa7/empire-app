import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* router */
import { RouterModule } from '@angular/router';

/* composant */
import { MakerComponent } from 'app/layouts/maker/maker.component';
// import { DragDropComponent } from 'app/components/drag-drop/drag-drop.component';
   //  DragDropComponent
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'maker', component: MakerComponent }
    ]),
    DragulaModule
  ],
  declarations: [
    MakerComponent
  ]
})
export class MakerModule { }
