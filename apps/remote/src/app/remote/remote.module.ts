import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteAnimateComponent } from './remote-animate/remote-animate.component';
import { RemoteComponent } from './remote.component';
import { REMOTE_ROUTES } from './remote.routes';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [RemoteComponent, RemoteAnimateComponent],
    imports: [
        RouterModule.forChild(REMOTE_ROUTES),
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [],
    exports: [RemoteComponent],
})
export class RemoteModule { }
