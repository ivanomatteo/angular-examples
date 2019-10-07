import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleAndLoopsComponent } from './esempi/style-and-loops.component';
import { InputOutputComponent } from './esempi/input-output.component';
import { FormTemplateComponent } from './esempi/form-template.component';
import { FormReactiveComponent } from './esempi/form-reactive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // required for template driven forms and reactive forms
import { Pippo } from './esempi/dependency-injection';

@NgModule({
  declarations: [
    AppComponent,
    StyleAndLoopsComponent,
    InputOutputComponent,
    FormTemplateComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Pippo],
  bootstrap: [AppComponent]
})
export class AppModule { }
