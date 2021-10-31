import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

export type StudentRequest = {
	firstName: string;
	lastName: string;
	age: number;
};

@Injectable({
	providedIn: 'root'
})
export class StudentsService {
	constructor(private http: HttpService) {}

	getStudents(): Observable<any> {
		return this.http.get(`/students`);
	}

	getStudentsRequests(): StudentRequest[] {
		let studentsRequests = localStorage.getItem('studentsRequests');

		if (!studentsRequests) return [];

		return JSON.parse(studentsRequests);
	}

	createStudentRequest(data: StudentRequest): void {
		let studentsRequests = localStorage.getItem('studentsRequests');

		if (!studentsRequests) {
			localStorage.setItem('studentsRequests', JSON.stringify([data]));
		} else {
			studentsRequests = JSON.parse(studentsRequests);

			(studentsRequests as unknown as Array<StudentRequest>).push(data);

			localStorage.setItem(
				'studentsRequests',
				JSON.stringify(studentsRequests)
			);
		}
	}
}
