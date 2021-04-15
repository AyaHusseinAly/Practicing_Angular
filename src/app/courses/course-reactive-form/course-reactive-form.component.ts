import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';



@Component({
  selector: 'app-course-reactive-form',
  templateUrl: './course-reactive-form.component.html',
  styleUrls: ['./course-reactive-form.component.scss']
})
export class CourseReactiveFormComponent implements OnInit {

  courseForm:FormGroup=this._fb.group({
    title:['',Validators.required],
    instructor:['',Validators.required],
    isAvailabel:[false]

  })
  
  constructor(private _fb: FormBuilder,
              private _coursesService:CoursesService,
              private _router:Router
              ) { }

  ngOnInit(): void {
  }
  onSubmit(form: FormGroup){
    console.log(form)
    if(form.valid){
      const course=form.value;
      this._coursesService.addCourse(course).subscribe((res:any)=>{
        //this._router.navigate(['/courses'])
        this._router.navigate(['/courses',res.data.id])

      })
    }
  }

}
