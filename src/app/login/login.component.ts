import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatadbService } from '../datadb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      name: new FormControl(""),
      surname: new FormControl(""),
      email: new FormControl(""),
      userType: new FormControl(""),
      address: new FormControl(""),
      phone: new FormControl("")
    });
  }

  constructor(private dbService: DatadbService) { }

  onSubmit = function(user) {
    console.log(user);
    console.log("User name: " + user.username);
    console.log("Password: " + user.password);
    console.log("Name: " + user.name);
    console.log("Surname: " + user.surname);
    console.log("Email: " + user.email);
    console.log("User type: " + user.userType);
    console.log("Address: " + user.address);
    console.log("Phone: " + user.phone);
    var existProf;
    this.dbService.existprofile(user.username).subscribe (
      (data) => existProf = data
    );

    console.log("existProf:" + existProf);
    if ((existProf) && (existProf.results)) {
      console.log("existProf.results:" + existProf.results);
    }
  }

}
