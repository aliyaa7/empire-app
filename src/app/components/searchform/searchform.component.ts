import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchthemeService } from 'app/services/searchtheme.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private searchService: SearchthemeService, fb: FormBuilder ) {
    this.searchForm = fb.group({
      title: '',
      year: ''
    });
   }

   startSearch() {
     const action = (data: Object) => {
       console.log(data);
     };
    this.searchService.search(action, 'test');
   }

  ngOnInit() {
  }

}
