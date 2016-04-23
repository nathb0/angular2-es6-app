import {Component, EventEmitter} from 'angular2/core';
import {CourseService} from './course.service'
import {CourseComponent} from './course.component'

export class CoursesComponent { 

	//Needed for Metadata Decorators
	static get annotations() {	
        return [
            new Component({
	    	  selector: 'univ-courses',
	    	  inputs: ['courseId'],
	    	  outputs: ['changed'],
              //template: '<h1> Hello Courses</h1>'  	  
	    	  templateUrl: './app/courses/courses.component.html',
	    	  //styleUrls: ['./app/characters/characters.component.css'],
	    	  directives: [CourseComponent]
            })
        ];
    }

	//Needed for DI
	static get parameters() {
		return [[CourseService]];
	}

	constructor(courseService) {
		this._courseService = courseService;
		this.changed = new EventEmitter();
	}

	ngOnInit() { 
        this.courses = [];
		this.getCourses(); 
	}

	getCourses() {
		this._courseService.getCourses()
			.subscribe(
				courses => this.courses = courses,
				error =>  this.errorMessage = error
			);
	}

	select(selectedCourse) {
		this.selectedCourse = selectedCourse;
		this.changed.emit(selectedCourse);
	}	    	
}
