import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: '<p> hello this is heroes list..</p>',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
