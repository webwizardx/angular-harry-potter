import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class Interceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				return event;
			}),
			catchError((error: HttpErrorResponse) => {
				return throwError(error.error);
			}),
			finalize(() => {
				// this.dissmissLoader();
			})
		);
	}
}
