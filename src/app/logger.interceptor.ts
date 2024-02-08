import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request is on its way to ' + req.url);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'This is the Authorisation Token'),
  })
  // window.alert(authReq.headers.get('Authorization'));
  return next(authReq);
};
