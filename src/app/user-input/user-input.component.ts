import { Component, EventEmitter,inject,Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {inputInvestment} from '../input-investment.model'
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() complete = new EventEmitter<inputInvestment>();

  invest = inject(InvestmentService)
  enteredInitialInvestment = '0';
  enteredAnnualInvestmnet = '0';
  enteredExpectedReturn ='5';
  enteredDuration = '0'

  onSubmit(){
    console.log("Submmited!!");
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestmnet);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);

    this.invest.onCalculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment,
      annualInvestment:+this.enteredAnnualInvestmnet,
      expectedReturn:+this.enteredExpectedReturn,
      duration:+this.enteredDuration
    });
  }
}
