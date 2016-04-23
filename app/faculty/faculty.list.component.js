import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {FacultyService} from './faculty.service'

export class FacultyListComponent { 

	static get annotations() {
        return [
            new Component({
                selector: 'univ-faculty-list',
				templateUrl: 'app/faculty/faculty.list.component.html',
				directives: [ROUTER_DIRECTIVES]
            })
        ];
    }

	//Needed for DI
	static get parameters() {
		return [[FacultyService]];
	}

	constructor(facultyService) {
		this._facultyService = facultyService;
	}
    
  	ngOnInit() { 
        this.facultyList = [];
		this.getFacultyList(); 
	}

	getFacultyList() {
        this._facultyService.getFacultyList()
            .subscribe(facultyList => this.facultyList = facultyList);
	}

}
