import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
        setHeaders: {
            'Content-Type': 'application/x-www-form-urlencoded',
          'authentication-token': 'f/jflh0mw7FIGYX31S/GvKwxqcyRLbPoW7qQ1htCZyYfXZJCEMLuKFgxM9RtZPcl'
        }
      });
    return next.handle(req);
  }
}
