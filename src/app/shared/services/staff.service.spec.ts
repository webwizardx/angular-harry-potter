import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StaffService } from './staff.service';

describe('StaffService', () => {
	let service: StaffService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [StaffService]
		});
		service = TestBed.inject(StaffService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
