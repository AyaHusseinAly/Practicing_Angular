import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
 { path: 'form', component: FormComponent },
  {
  path: '**',
  redirectTo:''
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
