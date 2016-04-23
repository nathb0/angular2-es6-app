import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
//import {map} from 'rxjs/operator/map';

export class CourseService { 

	//Needed for DI
	static get parameters() {
		return [[Http]];
		//return [[new OptionalMetadata(), Http]];
	}

	constructor(http) {
		this.httpUrl = 'api/courses.json';
		this._http = http;
	}

	getCourses() {
		return this._http.get(this.httpUrl)
			.map(this.extractData)
            .catch(this.handleError);		
	}

	extractData(response) {
		if (response.status < 200 || response.status >= 300) {
		  throw new Error('Bad response status: ' + response.status);
		}
		let body = response.json();
		return body.data || { };
	}
	
	handleError (error) {
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}

}
