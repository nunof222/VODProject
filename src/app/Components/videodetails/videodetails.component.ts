import { Component, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Video } from 'src/app/Domain/video';


@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: ['./videodetails.component.css']
})
export class VideoDetailsComponent implements OnInit {
  videoId:string = 'ifTF3ags0XI';
  video = [];


  constructor() { }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}

let apiLoaded = false;
