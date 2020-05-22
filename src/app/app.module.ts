import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleAndLoopsComponent } from './examples/style-and-loops.component';
import { InputOutputComponent } from './examples/input-output.component';
import { FormTemplateComponent } from './examples/form-template.component';
import { FormReactiveComponent } from './examples/form-reactive.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // required for template driven forms and reactive forms

import { Pippo } from './examples/dependency-injection';
import { DynamicFormComponent } from './examples/dinamicForms/dynamic-form.component';
import { QuestionComponent } from './examples/dinamicForms/question.component';
import { SelectComponent } from './examples/dinamicForms/controls/select.component';
import { SortPipe } from './examples/pipes/sort.pipe';
import { TestBootstrapComponent } from './examples/test-bootstrap.component';
import { FormControlErrorsComponent } from './examples/form-control-errors.component';
import { IsHelloDirective } from './examples/validators/templateDirectives/is-hello.directive';
import { ContainsDirective } from './examples/validators/templateDirectives/contains.directive';
import { BlogMainPageComponent } from './examples/blog/blog-main-page.component';
import { HttpClientComponent } from './examples/http-client.component';




@NgModule({
  declarations: [
    AppComponent,
    StyleAndLoopsComponent,
    InputOutputComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    DynamicFormComponent,
    QuestionComponent,
    SelectComponent,
    SortPipe,
    TestBootstrapComponent,
    FormControlErrorsComponent,
    IsHelloDirective,
    ContainsDirective,
    BlogMainPageComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Pippo],
  bootstrap: [AppComponent]
})
export class AppModule { }
