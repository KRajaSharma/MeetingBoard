import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatMenuModule } from "@angular/material/menu";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from "@angular/material/input";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import {MatIconModule} from '@angular/material/icon';
import { LogoutDialogComponent } from './conformation-dialog/conformation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BoardComponent } from './board/board.component';
import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {TextFieldModule} from '@angular/cdk/text-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    LogoutDialogComponent,
    BoardComponent,
    NewBoardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    TextFieldModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:BasicAuthHttpInterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[LogoutDialogComponent,NewBoardDialogComponent]
})
export class AppModule { }
