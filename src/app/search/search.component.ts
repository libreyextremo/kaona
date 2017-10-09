import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formSearch;

  constructor() { }

  ngOnInit() {
    this.formSearch = new FormGroup({
      searchText: new FormControl("", Validators.required)
    });
  }

  onSubmit = function(data) {
    console.log(data);
    console.log("Search terms: " + data.searchText);
  }
}
