import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user/user.component';
import { reducer } from './store/reducers/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {
    EntityDataModule,
    DefaultDataServiceConfig,
    HttpUrlGenerator,
} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { PluralHttpUrlGenerator } from './core/plural-http-url-generator';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'http://localhost:3000/',
    timeout: 3000, // request timeout
};

@NgModule({
    declarations: [AppComponent, UserComponent],
    imports: [
        // Angular
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,

        // Custom
        SharedModule,

        // NGRX
        StoreModule.forRoot(
            { user: reducer },
            {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictStateSerializability: true,
                    strictActionImmutability: true,
                    strictActionSerializability: true,
                },
            }
        ),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        StoreRouterConnectingModule.forRoot({
            routerState: RouterState.Minimal,
        }),
        ...(environment.production ? [] : [StoreDevtoolsModule.instrument()]),
    ],
    providers: [
        {
            provide: DefaultDataServiceConfig,
            useValue: defaultDataServiceConfig,
        },
        { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
