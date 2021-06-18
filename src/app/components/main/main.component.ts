import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  vipFullNames: Array<string> = ["Rick Sanchez", "Morty Smith", "Cornvelious Daniel"];
  errors: Array<string> = [];
  fullNameFieldErrors: Array<string> = [];
  formObject: any = {
    fullName: null,
    age: null
  };
  validationPassed: Boolean = false;
  // vars used by the bonus "cross out" challenge:
  rickHasArrived: Boolean = false;
  mortyHasArrive: Boolean = false;
  cornveliousHasArrived: Boolean = false;

  constructor() { }

  ngOnInit(): void {

   }

  validateForm() {

    // *******************************************************************************************
    // VALIDATE FULL NAME FIELD
    // *******************************************************************************************
    // Check to ADD this error to the errors list displayed in the UI:
    // "Full name is a required field"
    if (!this.formObject.fullName && !this.errors.includes("Full name is a required field")) {
      this.errors.push("Full name is a required field");
      this.fullNameFieldErrors.push("Full name is a required field");
    }


    // TODO: If a full name has been entered,
    // Check to ADD this error to the errors list displayed in the UI:
    // "You are not on the VIP list"
    // HINT: check to see if the full name entered is included in the vipFullNames array
    if (this.formObject.fullName && !this.vipFullNames.includes(this.formObject.fullName) && this.formObject.age != null) {
      this.errors.push("You are not on the VIP list");

    }


    // After performing all of the error checks related to the full name field above,
    // we check to see if error styling should be applied to the full name input field:

    // Check to ADD field level error styling to the full name field:
    let fullNameElRef: any = document.getElementById("fullName");
    if (this.fullNameFieldErrors.length > 0 && !fullNameElRef.classList.contains('is-invalid')) {
      fullNameElRef.classList.add('is-invalid');
    }
    // *******************************************************************************************
    // VALIDATE AGE FIELD
    // *******************************************************************************************
    // TODO: check to ADD this error to the errors list displayed in the UI:
    // "Age is a required field"
    if(this.formObject.age === null && !this.errors.includes("Age is a required field")){
      this.errors.push("Age is a required field");
    }else if(this.formObject.age < 21){
      this.errors.push("You must be 21 years of age or older to enter");
    }

    // TODO: If an age has been entered,
    // Check to ADD this error to the errors list displayed in the UI:
    // "You must be 21 years of age or older to enter"


    // TODO: Check to ADD field level error styling to the age field:

    // *******************************************************************************************
    // FINAL VALIDATION STEP
    // *******************************************************************************************
    // the final check of the validation function is to see if we made it this
    // far without catching any errors. If we did, then validation passed!
    if (this.errors.length === 0) {
      // TODO: "cross out" challenge - if validation has passed for a VIP member,
      // cross out the name of that VIP member from the list in the UI.
      // HINT: Use the existing variables like "rickHasArrived" in conjunction with
      // a conditional angular class "[ngClass]" and "text-decoration: line-through" styling
      this.validationPassed = true;
    } else {
      this.validationPassed = false;
    }
    console.log(this.formObject.age,'Age');
  }

  fullNameChangeHandler(event: any) {
    this.formObject.fullName = event.target.value;
    // Check to REMOVE this error from the errors list displayed in the UI:
    // "Full name is a required field"
    if (this.formObject.fullName && this.errors.includes("Full name is a required field")) {
      this.errors = this.errors.filter(error => error !== "Full name is a required field");
      this.fullNameFieldErrors = this.fullNameFieldErrors.filter(error => error !== "Full name is a required field");
    }

    // TODO: If a full name has been entered,
    // Check to REMOVE this error from the errors list displayed in the UI:
    // "You are not on the VIP list"
    // HINT: check to see if the full name entered is included in the vipFullNames array

    // Check to REMOVE field level error styling from the full name field:
    let fullNameElRef: any = document.getElementById("fullName");
    if (this.fullNameFieldErrors.length === 0) {
      fullNameElRef.classList.remove('is-invalid');
    }
  }

  // *******************************************************************************************
  // TODO: Add a change handler function for the age field
  // The change handler should include the following TO-DOs:

  // TODO: check to REMOVE this error from the errors list displayed in the UI:
  // "Age is a required field"

  // TODO: If an age has been entered,
  // Check to REMOVE this error from the errors list displayed in the UI:
  // "You must be 21 years of age or older to enter"

  // TODO: Check to REMOVE field level error styling from the age field:
  // *******************************************************************************************

}
