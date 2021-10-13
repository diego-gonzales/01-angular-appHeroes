import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showInput$: Observable<boolean>;

  myMiniForm: FormGroup = this.fb.group({
    keyword: [ '', Validators.required ]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              sharingService: SharingService) {
    this.showInput$ = sharingService.showSearchInputObservable;
  }

  ngOnInit(): void {
  }

  searchHero(): void {
    const { keyword } = this.myMiniForm.value;
    if (keyword.trim() === '') return;
    this.router.navigate(['/heroes/search', keyword.trim().toLowerCase()]);
  };
}
