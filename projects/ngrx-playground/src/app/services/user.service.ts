import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { UserState } from '../store/reducers/user.reducer';

@Injectable({ providedIn: 'root' })
export class UserService extends EntityCollectionServiceBase<UserState> {
    constructor(
        serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
        super('User', serviceElementsFactory);
    }
}
