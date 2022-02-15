import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@lib/material';
import { RemoteAnimateComponent } from './remote-animate/remote-animate.component';
import { RemoteComponent } from './remote.component';
import { REMOTE_ROUTES } from './remote.routes';

@NgModule({
    declarations: [RemoteComponent, RemoteAnimateComponent],
    imports: [
        RouterModule.forChild(REMOTE_ROUTES),
        MaterialModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    exports: [RemoteComponent],
})
export class RemoteModule { }
