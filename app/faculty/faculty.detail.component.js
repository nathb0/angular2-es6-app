import {Component} from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {FacultyService} from './faculty.service'

export class FacultyDetailComponent { 

	static get annotations() {
        return [
            new Component({
                selector: 'univ-faculty-detail',
				templateUrl: 'app/faculty/faculty.detail.component.html',
				directives: [ROUTER_DIRECTIVES]
				//inputs: ['id']
            })
        ];
    }

	//Needed for DI
	static get parameters() {
		return [[FacultyService], [RouteParams]];
	}

	constructor(facultyService, routeParams) {
		this._facultyService = facultyService;
		this._routeParams = routeParams;
	}
    
  	ngOnInit() { 
		if (!this.faculty) {
      		let id = +this._routeParams.get('id');		  
        	this.faculty = this.getFacultyDetail(id); 
		}
	}

	getFacultyDetail(facultyId) {
        this._facultyService.getFacultyDetail(facultyId)
            .subscribe(faculty => this.faculty = faculty);
	}
	
}
