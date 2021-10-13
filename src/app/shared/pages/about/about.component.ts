import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../../core/services/sharing.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(sharingService: SharingService) {
    sharingService.showSearchInputValue = false;
  }

  ngOnInit(): void {
  }

}
