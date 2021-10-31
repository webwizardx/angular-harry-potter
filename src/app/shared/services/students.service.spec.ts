import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';

describe('StudentsService', () => {
	let service: StudentsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [StudentsService]
		});
		service = TestBed.inject(StudentsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
