import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from 'src/app/Domain/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user')!)
    );
    this.user= this.userSubject.asObservable();
   }

   login(email:string, password:string) {
    return this.http.post<User>('https://vodmasterdata.herokuapp.com/api/user/signin/', {email, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
        ));
   }
   
   logout() {localStorage.removeItem('user');}

   getToken():string {
    return this.userSubject.value!.token;
   }
}
