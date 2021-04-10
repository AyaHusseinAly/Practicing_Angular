import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
//import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    CoursesComponent,
    FormComponent,
    
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule ,
  
  ]
})
export class CoursesModule { }
