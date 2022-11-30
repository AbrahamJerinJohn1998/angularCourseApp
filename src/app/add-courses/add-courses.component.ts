import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  constructor(private api:ApiService){}

readValues=()=>
{

let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
console.log(data)
this.api.addCourses(data).subscribe(
  
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Course added successfully")
        this.courseTitle=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseDate=""
        this.courseVenue=""
      } else {
        alert("Something went wrong")
      }
    }
  
)
}
}
