import {Component, EventEmitter} from 'angular2/core';
import {CourseService} from './course.service'

export class CourseComponent { 

	//Needed for Metadata Decorators
	static get annotations() {	
        return [
            new Component({
		        selector: 'univ-course-detail',
		        template: '<h3 *ngIf="course">You selected {{course.name}}</h3>',
		        inputs: ['course']
            })
        ];
    }

}

