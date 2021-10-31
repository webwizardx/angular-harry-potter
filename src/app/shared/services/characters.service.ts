import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

export type WizardingHouses =
	| 'gryffindor'
	| 'hufflepuff'
	| 'ravenclaw'
	| 'slytherin';

@Injectable({
	providedIn: 'root'
})
export class CharactersService {
	constructor(private http: HttpService) {}

	getCharacters(wizardingHouse: WizardingHouses): Observable<any> {
		return this.http.get(`/house/${wizardingHouse}`);
	}
}
