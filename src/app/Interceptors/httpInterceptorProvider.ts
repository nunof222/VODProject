import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationInterceptor } from "./auth.interceptor";

export const httpInterceptorProvider = [
    {provide: HTTP_INTERCEPTORS, useclass: AuthenticationInterceptor, multi:true},

];