import { Component } from '@angular/core';
import { SharingService } from './core/services/sharing.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(sharingService: SharingService) {
  //   sharingService.sharingObservableData = { name: 'It changes!!!' }
  // }

  enviroment: string = environment.env;
}
