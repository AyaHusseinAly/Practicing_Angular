import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 
  constructor(private _http:HttpClient){}
 
  getCourses(){
  return this._http.get(`${environment.baseUrl}/courses`)
  }
  getCourseById(id: any){
  return this._http.get(`${environment.baseUrl}/courses/${id}`)
 }
 addCourse(course: any){
  return this._http.post(`${environment.baseUrl}/courses/`,course) //course is the body of post req
 }
}