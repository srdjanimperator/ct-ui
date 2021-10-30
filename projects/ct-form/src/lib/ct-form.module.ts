import { NgModule } from '@angular/core';
import { CtFormComponent } from './ct-form.component';

import { MatButtonModule } from '@angular/material/button'  

@NgModule({
  declarations: [
    CtFormComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    CtFormComponent
  ]
})
export class CtFormModule { }
