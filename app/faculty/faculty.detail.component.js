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
	
/*
  private _gotoCharacters() {
    let route = ['Characters', { id: this.character ? this.character.id : null }]
    this._router.navigate(route);
  }

   setEditCharacter(character: Character) {
    if (character) {
      this.character = character;
    } else {
      this._gotoCharacters();
    }
  }
*/
}

/*
export class VehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor(
    private _routeParams: RouteParams,
    private _router: Router,
    private _vehicleService: VehicleService) { }

  ngOnInit() {
    if (!this.vehicle) {
      let id = +this._routeParams.get('id');
      this._vehicleService.getVehicle(id)
        .subscribe((vehicle: Vehicle) => this._setEditVehicle(vehicle));
    }
  }

  private _gotoVehicles() {
    let route = ['Vehicles', { id: this.vehicle ? this.vehicle.id : null }]
    this._router.navigate(route);
  }

  private _setEditVehicle(vehicle: Vehicle) {
    if (vehicle) {
      this.vehicle = vehicle;
    } else {
      this._gotoVehicles();
    }
  }
}
*/
