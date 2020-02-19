import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { AddressType } from "src/app/model/address-type.model";
import { HttpService } from "src/app/services/http.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-address-details",
  templateUrl: "./address-details.component.html",
  styleUrls: ["./address-details.component.css"]
})
export class AddressDetailsComponent implements OnInit {
  types: AddressType;
  addressForm: FormGroup;
  applicantId: number;
  addressTypeId = 1;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.addressForm = new FormGroup({
      line1: new FormControl(""),
      line2: new FormControl(""),
      pincode: new FormControl("")
    });
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.applicantId = Number(params.applicantId);
    }
    this.getAddressType();
   
  }

  getAddressType() {
    this.httpService
      .post(
        "53255264517a11eaa360c282e0885855",
        "d1da2c8e515111eaa360c282e0885855",
        "c4102b2a52e211eaa360c282e0885855",
        {}
      )
      .subscribe((response: any) => {
        console.log("add res", response);
        const data = response.ProcessVariables;
        if (response.Error === '0') {
          const types: AddressType = data.addressTypeList;
          this.types = types;
        }
      });
  }

  onChange(value) {
    this.addressTypeId = Number(value);
  }

  onSubmit() {
    const value = this.addressForm.value;

    const data = {
      ...value,
      applicantId: this.applicantId,
      addressTypeId: this.addressTypeId
    }

    console.log('data', data)

    this.httpService
    .post(
      "53255264517a11eaa360c282e0885855",
      "d1da2c8e515111eaa360c282e0885855",
      "bc195bfa52fe11eaa360c282e0885855",
      data
    )
    .subscribe((response: any) => {
      console.log("add res", response);
      const data = response.ProcessVariables;
      if (data.ErrorCode) {
        const types: AddressType = data.addressTypeList;
        this.types = types;
      }
    });

  }
}
