import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-app';
  Description ="A question on interpolation";
  date = "20/02/20";

  //an array of obejects called students
  students=[
    {id:1, name:'Ademola', age:"20"},
    {id:2, name:'Great',   age:"18"},
    {id:3, name:'Anisa',   age:"22"},
    {id:4, name:'chinaza', age:"19"},
    {id:5, name:'Patrick', age:"17"},
    {id:6, name:'Desmond', age:"20"},
    {id:7, name:'Barney',  age:"21"}
  ];




}
