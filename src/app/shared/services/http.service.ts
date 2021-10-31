import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(private http: HttpClient) {}

	post(path: string, data: any, config?: any): Observable<any> {
		const url = `${environment.BASE_URL}${path}`;

		return this.http.post(url, data, config);
	}

	get(path: string, config?: any): Observable<any> {
		const url = `${environment.BASE_URL}${path}`;

		return this.http.get(url, config);
	}

	put(path: string, data?: any, config?: any): Observable<any> {
		const url = `${environment.BASE_URL}${path}`;

		return this.http.put(url, data, config);
	}

	patch(path: string, data: any, config?: any): Observable<any> {
		const url = `${environment.BASE_URL}${path}`;

		return this.http.patch(url, data, config);
	}

	delete(path: string, config?: any): Observable<any> {
		const url = `${environment.BASE_URL}${path}`;

		return this.http.delete(url, config);
	}
}
