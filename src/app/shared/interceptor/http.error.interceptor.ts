import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(
        private readonly _snackBar: MatSnackBar
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    if (!error.ok) {
                        const errorMessage = 'Oops! Looks like you have used up all your API requests for today :)';
                        this._snackBar.open(errorMessage, 'Close', {
                            duration: 5000,
                        }); return throwError(errorMessage);
                    }
                })
            )
    }
}