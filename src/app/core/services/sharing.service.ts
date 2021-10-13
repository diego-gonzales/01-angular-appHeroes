import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Example } from '../../shared/interfaces/example.interface';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private showSearchInputObservablePrivate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // private sharingObservablePrivate: BehaviorSubject<Example> = new BehaviorSubject<Example>({ name: 'Diego Gonzales' });

  get showSearchInputObservable() {
    return this.showSearchInputObservablePrivate.asObservable();
  };

  set showSearchInputValue(value: boolean) {
    this.showSearchInputObservablePrivate.next(value);
  };

  // get sharingObservable() {
  //   return this.sharingObservablePrivate.asObservable();
  // };

  // set sharingObservableData(data: Example) {
  //   this.sharingObservablePrivate.next(data);
  // };
}
