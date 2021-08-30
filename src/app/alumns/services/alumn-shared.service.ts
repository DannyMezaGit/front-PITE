import { BehaviorSubject } from 'rxjs';
import { Alumn } from '../alumn.model';

export class AlumnSharedService {

  alumn$: BehaviorSubject<Alumn> = new BehaviorSubject<Alumn>({
    alumnId: 0,
    age: 0,
    birthday: new Date(),
    name: '',
    remarks: '',
    isActive: true
  });
  constructor() { }

  get getAlumn() {
    return this.alumn$.getValue();
  }

  get getAlumn$() {
    return this.alumn$.asObservable();
  }

  set setNewAlumn(alumn: Alumn) {
    this.alumn$.next(alumn);
  }

}
