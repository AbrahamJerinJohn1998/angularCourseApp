import { Component } from '@angular/core';

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
readValues=()=>
{

let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
console.log(data)
}
}
