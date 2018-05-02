import { Component, OnInit } from '@angular/core';
import { WebhelperService } from '../webhelper.service';
import { Calculation } from '../Classes/calculation';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css','../../assets/bootstrap.min.css'],
  providers: [WebhelperService]
})
export class CalculatorComponent implements OnInit {

  input = "";
  validationPattern = "^-?.?[0-9]\\d*(\\.\\d+)?$";
  calculations: Calculation;
  webhelper: WebhelperService;
  calculating = false;

  constructor(webhelper: WebhelperService) {
    this.calculations = new Calculation("", "", "");
    this.webhelper = webhelper;
  }

  ngOnInit() {
  }

  checkInput(input: string) {
    this.calculating = true;
    var inputArray = input.split(',');
    var failedValidation = false;
    if (inputArray.length > 0) {
      for (var i = 0; i < inputArray.length; i++) {
        if (!inputArray[i].match(this.validationPattern)) {
          failedValidation = true;
          break;
        }
      }
    }
    else {
      failedValidation = true;
    }
    if (!failedValidation) {
      this.sendToBackend(inputArray);
    }
    else {
      alert("Invalid input. Please enter a comma separated list of numbers.");
      this.calculating = false;
    }
  }

  sendToBackend(userInput: string[]) {
    this.webhelper.postToBackend(userInput).subscribe(
      ret => this.handleResult(ret), err => this.handleError(err)
    );
  }

  handleResult(ret: Calculation) {
    this.calculations = ret;
    this.calculating = false;
  }

  handleError(err: any) {
    alert("An error occurred while performing calculations.");
    this.calculating = false;
  }

}
