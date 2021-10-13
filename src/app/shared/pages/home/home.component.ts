import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../../core/services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(sharingService: SharingService) {
    sharingService.showSearchInputValue = false;
  }

  ngOnInit(): void {
  }

}
