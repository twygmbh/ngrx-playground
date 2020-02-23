import { Component, OnInit } from '@angular/core';
import { UserState } from '../../store/reducers/user.reducer';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserFacadeService } from '../../store/facade/user-facade.service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    user$ = this.userFacade.user$;

    form: FormGroup;
    jobsControl: FormArray;

    constructor(private fb: FormBuilder, public userFacade: UserFacadeService) {
        this.form = this.fb.group({
            id: [],
            name: [],
            jobs: this.fb.array([]),
        });

        this.jobsControl = this.form.get('jobs') as FormArray;
    }

    ngOnInit(): void {
        this.user$.subscribe((user: UserState) => {
            this.form.patchValue({ ...user });

            user.jobs.forEach(job => {
                this.jobsControl.push(this.fb.group({ ...job }));
            });
        });
    }

    deleteJob(index: number) {
        this.jobsControl.removeAt(index);
    }

    addNewJob() {
        this.jobsControl.push(
            this.fb.group({
                employer: '',
                from: new Date(),
                to: new Date(),
            })
        );
    }
}
