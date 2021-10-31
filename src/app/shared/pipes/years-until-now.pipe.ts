import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'yearsUntilNow'
})
export class YearsUntilNowPipe implements PipeTransform {
	transform(value: string): number | string {
		const wizardDateOfBirth = moment(value.split('-').reverse());
		const currentDate = moment();

		const years = currentDate.diff(wizardDateOfBirth, 'years');

		return years || 'Age not available';
	}
}
