import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./services/auth.interceptor.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpService } from "./services/http.service";
import { ApplicantComponent } from "./modules/applicant/applicant.component";
import { LoanComponent } from "./modules/loan/loan.component";

import { AppRouterModule } from "./app.router.module";
import { AddressDetailsComponent } from "./modules/address-details/address-details.component";

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    ApplicantComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
