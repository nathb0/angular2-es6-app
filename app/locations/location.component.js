import {Component} from 'angular2/core';
import {LocationService} from './location.service'

export class LocationComponent { 

	static get annotations() {
        return [
            new Component({
                selector: 'univ-locations',
				templateUrl: 'app/locations/locations.component.html'
            })
        ];
    }

	//Needed for DI
	static get parameters() {
		return [[LocationService]];
	}

	constructor(locationService) {
		this._locationService = locationService;
	}
    
  	ngOnInit() { 
        this.locations = [];
		this.getLocations(); 
	}

	getLocations() {
        this._locationService.getLocations()
            .subscribe(locations => this.locations = locations);
	}

}
