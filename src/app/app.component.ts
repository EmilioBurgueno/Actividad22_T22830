import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  totalMoney = 0;
  transactions = [];

  addAct(inputMoney: HTMLInputElement) {
    const money = Number(inputMoney.value).toFixed(2);
    // tslint:disable-next-line: triple-equals
    if (inputMoney.value == '' || Number(money) < 0) {
      alert('Enter valid number');
    } else {
      // Create new Object
      const newPosTranc = new Transaction(money, 'trending_up');
      // Add to Total Money
      this.totalMoney = this.totalMoney + Number(newPosTranc.amount);
      // Add to List
      this.transactions.unshift(newPosTranc);
    }
  }

  subAct(inputMoney: HTMLInputElement) {
    const money = Number(inputMoney.value).toFixed(2);
    // tslint:disable-next-line: triple-equals
    if (inputMoney.value == '' || Number(money) < 0) {
      alert('Enter valid number');
    } else {
      const newNegTranc = new Transaction(money, 'trending_down');
      this.totalMoney = this.totalMoney - Number(newNegTranc.amount);
      this.transactions.unshift(newNegTranc);
    }
  }

  clear(inputMoney: HTMLInputElement) {
    inputMoney.value = '';
  }
}

class Transaction {
  amount: any;
  type: any;
  constructor(Amount, Type) {
    this.amount = Amount;
    this.type = Type;
  }
}
