import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      if(err.status === 404){
        window.alert('authorisation error');
      }
      const e = err.error.message || err.statusText;
      console.error(e);
    return throwError(() => err);
  }));
};
