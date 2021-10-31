import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class StaffService {
	constructor(private http: HttpService) {}

	getStaff(): Observable<any> {
		return this.http.get(`/staff`);
	}
}
