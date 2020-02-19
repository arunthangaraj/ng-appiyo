import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { AddressType } from "src/app/model/address-type.model";

@Component({
  selector: "app-applicant",
  templateUrl: "./applicant.component.html",
  styleUrls: ["./applicant.component.css"]
})
export class ApplicantComponent implements OnInit {
  applicantForm: FormGroup;

  loanId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    console.log("router", this.activatedRoute.snapshot.params);
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.loanId = Number(params.loanId);
    }
    this.applicantForm = new FormGroup({
      firstName: new FormControl(""),
      middleName: new FormControl(""),
      lastName: new FormControl(""),
      mobile: new FormControl("")
    });
    // this.getAddressType();
  }

  onSubmit() {
    const value = this.applicantForm.value;

    const data = {
      ...value,
      loanId: this.loanId
    };

    this.httpService
      .post(
        "53255264517a11eaa360c282e0885855",
        "d1da2c8e515111eaa360c282e0885855",
        "bd5b530652db11eaa360c282e0885855",
        data
      )
      .subscribe((response: any) => {
        console.log("applicant response", response);
        const data = response.ProcessVariables;
        if(response.Error === '0') {
            this.router.navigate(['/address', data.applicantId]);
        }
      });
  }
}
