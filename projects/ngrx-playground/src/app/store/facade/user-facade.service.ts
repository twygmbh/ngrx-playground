import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { selectUserState } from '../selectors/user.selectors';

@Injectable({
    providedIn: 'root',
})
export class UserFacadeService {
    user$: Observable<UserState>;
    constructor(private store: Store<UserState>) {
        this.user$ = this.store.select(selectUserState);
    }
}
