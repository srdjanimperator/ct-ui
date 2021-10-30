import { NgModule } from '@angular/core';
import { CtFormComponent } from './ct-form.component';

import { MatButtonModule } from '@angular/material/button'  
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CtFormComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CtFormComponent
  ]
})
export class CtFormModule { }
