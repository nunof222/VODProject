import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Video } from '../Domain/video';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private backUrl = 'https://vodmasterdata.herokuapp.com/api/video/';
  private catUrl= 'https://vodmasterdata.herokuapp.com/api/category/';

  httpOptions = { 
    headers: new HttpHeaders( {'Content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

  getVideos(): Observable<Video[]>{
    return this.http.get<Video[]>(this.backUrl);
  }

  getVideo(id:string): Observable<Video>{              
    const url = `${this.backUrl}${id}`;
    return this.http.get<Video>(url);
  }

  rateVideo(video:Video): Observable<any> {
    const url = `${this.backUrl}${video.id}/rate`;
    return this.http.put<Video>(url, video, this.httpOptions);

  }
  // all previous methods are accessible only to users with client role

//--------------------------------------------------------------------------------

 // declare type unknown so that if method or property does not exist, typescript will throw compile time error
// start methods only available to role manager

   deleteVideo(id:string): Observable<unknown>{
    const url = `${this.backUrl}${id}`;
    return this.http.delete(url, this.httpOptions);       
   }




  //  below method is available to any role~


  getCategories(video:Video): Observable<Video[]>{
    return this.http.get<Video[]>(this.catUrl);

  }
}

