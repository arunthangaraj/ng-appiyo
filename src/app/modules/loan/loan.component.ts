import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpService } from "src/app/services/http.service";

@Component({
  templateUrl: "./loan.component.html",
  styleUrls: ["./loan.component.css"]
})
export class LoanComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.loanForm = new FormGroup({
      loanType: new FormControl("", Validators.required),
      loanCategory: new FormControl("", Validators.required),
      loanAmount: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    console.log("values", this.loanForm.value);
    const processId = "5350b1de517a11eaa360c282e0885855";
    const projectId = "d1da2c8e515111eaa360c282e0885855";
    const workflowId = "53255264517a11eaa360c282e0885855";
    const data = this.loanForm.value;

    this.httpService
      .post(workflowId, projectId, processId, data)
      .subscribe((response: any) => {
        console.log("response", response);
        const data = response.ProcessVariables;
        if(response.Error === '0') {
            this.router.navigate(['/applicant', data.loanId]);
        }
      });
  }
}
