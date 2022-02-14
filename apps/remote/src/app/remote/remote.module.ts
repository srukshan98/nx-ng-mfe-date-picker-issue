import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteAnimateComponent } from './remote-animate/remote-animate.component';
import { RemoteComponent } from './remote.component';
import { REMOTE_ROUTES } from './remote.routes';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RemoteComponent, RemoteAnimateComponent],
    imports: [
        RouterModule.forChild(REMOTE_ROUTES),
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [RemoteComponent],
})
export class RemoteModule { }
