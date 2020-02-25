import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../reducers/user.reducer';
import { UserService } from '../../services/user.service';

@Injectable({
    providedIn: 'root',
})
export class UserFacadeService {
    user$: Observable<UserState[]>;
    constructor(private userService: UserService) {
        this.user$ = this.userService.entities$;
        this.userService.getByKey(1);
    }

    save(user: UserState) {
        this.userService.update({ ...user });
    }
}
