import { Component, Inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';
// import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent,InvestmentResultsComponent]
})
export class AppComponent {

  // resultData?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]

  // investment = Inject(InvestmentService);


  
}
