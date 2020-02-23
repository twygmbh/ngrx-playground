import { Component } from '@angular/core';
import { UserState } from './store/reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import { selectUserState } from './store/selectors/user.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    user$: Observable<UserState>;
    constructor(private store: Store<UserState>) {
        this.user$ = this.store.pipe(select(selectUserState));
    }
}
