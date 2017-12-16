import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './loginPage.component';
import { UserLoginService } from './user-login.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({

   imports: [
        RouterModule,
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent],
    providers: [UserLoginService]
})

export class LoginPageModule { }
