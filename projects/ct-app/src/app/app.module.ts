import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CtFormModule } from 'ct-form';
import { CtGridModule } from 'ct-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CtGridModule,
    CtFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
