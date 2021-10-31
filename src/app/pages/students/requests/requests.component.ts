import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
	StudentRequest,
	StudentsService
} from 'src/app/shared/services/students.service';

@Component({
	selector: 'app-requests',
	templateUrl: './requests.component.html',
	styleUrls: ['./requests.component.scss']
})
export class RequestsComponent {
	form: FormGroup;
	studentsRequests: StudentRequest[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private studentsService: StudentsService
	) {
		this.createForm();
		this.studentsRequests = this.studentsService.getStudentsRequests();
	}

	get controls(): any {
		return this.form.controls;
	}

	createForm(): void {
		this.form = this.formBuilder.group({
			firstName: [null, Validators.required],
			lastName: [null, Validators.required],
			age: [
				null,
				Validators.compose([
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(5)
				])
			]
		});
	}

	onSubmit(): void {
		if (!this.form.valid) return;

		this.studentsService.createStudentRequest(this.form.value);
		this.studentsRequests = this.studentsService.getStudentsRequests();
	}
}
