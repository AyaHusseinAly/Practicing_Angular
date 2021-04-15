import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { FormComponent } from './form/form.component';
import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';



const routes: Routes = [
  { path: '', component: CoursesComponent,
    children: [
    {
      path: '', component: CoursesListComponent
    },
    {
      path: 'form', component: CourseReactiveFormComponent ,
    },
    {
      path: ':id', component: CourseDetailsComponent
    }
  ]
},


  {
  path: '**',
  redirectTo:''
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
