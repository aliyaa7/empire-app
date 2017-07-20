import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchthemeService {

  constructor(private http: Http) {

  }

  search(action: (data: Object) => any, title: string, year: number = 0): void {
    const results = {};
    const y = year ? `&y=${year}` : '';

    this.http.get(`http://www.omdbapi.com/?t=${title}${y}&plot=full`).subscribe(
      (response) => {
        action(response.json());
      });
  }

}

