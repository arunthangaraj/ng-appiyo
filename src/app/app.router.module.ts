import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoanComponent } from "./modules/loan/loan.component";
import { ApplicantComponent } from "./modules/applicant/applicant.component";
import { AddressDetailsComponent } from "./modules/address-details/address-details.component";

const routes: Routes = [
  {
    path: "",
    component: LoanComponent
  },
  {
    path: "applicant/:loanId",
    component: ApplicantComponent
  },
  {
    path: "address/:applicantId",
    component: AddressDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
