import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleAndLoopsComponent } from './esempi/style-and-loops.component';
import { InputOutputComponent } from './esempi/input-output.component';


@NgModule({
  declarations: [
    AppComponent,
    StyleAndLoopsComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
