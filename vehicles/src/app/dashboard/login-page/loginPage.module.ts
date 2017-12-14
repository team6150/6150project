import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './loginPage.component';

@NgModule({

   imports: [
        RouterModule
    ],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent]
})

export class LoginPageModule { }
