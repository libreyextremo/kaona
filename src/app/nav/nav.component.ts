import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() myUser;

  private registered: Boolean;

  constructor() {
    console.log(this.myUser);
    this.registered = this.myUser != undefined;
    console.log(this.registered);
  }

  ngOnInit() {
  }

}
