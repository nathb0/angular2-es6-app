import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import 'rxjs/Rx';
//import Rx from 'rxjs/Rx';

import {LocationService} from './locations/location.service'
import {CourseService} from './courses/course.service'
import {FacultyService} from './faculty/faculty.service'

import {LocationComponent} from './locations/location.component'
import {FacultyComponent} from './faculty/faculty.component'
//import {CourseComponent} from './courses/course.component'
import {CoursesComponent} from './courses/courses.component'

export class AppComponent { 

	static get annotations() {
        return [
            new Component({
                selector: 'my-app',
				templateUrl: 'app/app.component.html',
				//template: `<h1>My First Angular 2 App in ES6 JavaScript - Yay!!</h1>`
				providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS, CourseService, LocationService, FacultyService ],
				directives: [ ROUTER_DIRECTIVES, LocationComponent]//, FacultyComponent, CourseComponent, CoursesComponent ]
            }),
            new RouteConfig([
				{ path: '/courses', name: 'Courses', component: CoursesComponent, useAsDefault: true },
				{ path: '/courses/:id', name: 'Course', component: LocationComponent },
				{ path: '/faculty/...', name: 'Faculty', component: FacultyComponent },
				{ path: '/locations', name: 'Locations', component: LocationComponent }
			])
        ];
    }
	
	changedfoo(changedCharacter) {
		if (changedCharacter) {
			console.log(`Event Emitter said you selected ${changedCharacter.name}`);
		}
	}
}
