import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { CreateDiseaseComponent } from './create-disease/create-disease.component';
import { AppRoutingModule } from "app/app-routing.module";
import { DiseaseService } from "app/disease.service";
import { DiseaseListComponent } from './disease-list/disease-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDiseaseComponent,
    DiseaseListComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpModule
  ],
  providers: [DiseaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
