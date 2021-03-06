import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './AuthInterceptor';

/** Http interceptor providers in outside-in order */
export default [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];