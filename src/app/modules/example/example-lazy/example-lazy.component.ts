import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from '../../../core/services/sharing.service';
import { Example } from '../../../shared/interfaces/example.interface';

@Component({
  selector: 'app-example-lazy',
  templateUrl: './example-lazy.component.html',
  styleUrls: ['./example-lazy.component.css']
})
export class ExampleLazyComponent implements OnInit {

  // data$: Observable<Example>;

  constructor(private sharingService: SharingService) {
    // this.data$ = this.sharingService.sharingObservable;
  }

  ngOnInit(): void {
  }

}
