import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as anime from 'animejs';

@Component({
  selector: 'logo-anime',
  templateUrl: 'logo.html',
  styleUrls: [
    './logo.scss'
  ]
})
export class LogoAnime {
  constructor(public router: Router) {

  }
  ngAfterViewInit() {
    anime({
      targets: '.lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutCubic',
      color: "#000",
      duration: 550,
      // translateX: 100,
      complete: function (anim) {
        anime({
          targets: '#lineDrawingText',
          translateX: 100,
          easing: 'easeInOutQuad',
          complete: function (anim) {
            document.getElementById('svgGroupTree').classList.add('animated')
            document.getElementById('svgGroupText').classList.add('animated')
          }
        })
      },
      delay: function (el, i) { return i * 450 },
    });
  }
}