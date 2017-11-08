import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatadbService {

  constructor(private http: Http) { }

  existprofile(idUser) {
    //console.log('../assets/testservice.json');
    console.log('DatadbService: http://localhost:4000/api/existprofile?id=' + idUser);
    return this.http.get('http://localhost:4000/api/existprofile?id=' + idUser).map(
      (response) => response.json()
    );
  }

}
