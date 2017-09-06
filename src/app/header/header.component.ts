import { Component, OnInit } from '@angular/core';
import {  } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Welcome to my portfolio!';
  intro = 'Hello, I am Aditya Bhardwaj!';
  addedText = 'The Website is under construction! Sorry for keeping you waiting.';
  newColor = 'green';
  constructor() { }

  ngOnInit() {
  }

}
