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

  alumnsList$: BehaviorSubject<Alumn[]> = new BehaviorSubject<Alumn[]>([]);
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
  get getAlumnsList$() {
    return this.alumnsList$.asObservable();
  }

  set setAlumnsList(alumns: Alumn[]) {
    this.alumnsList$.next(alumns);
  }

}
