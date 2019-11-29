import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  @ViewChild("transactionsSummary", {static: true}) transactionsSummary: ElementRef;

  transaction:any;
  constructor() { }

   ngOnInit() {
    this.transaction = "all";
    this.getTransactionsSummary();
  }

  transactionType(type) {
    this.transaction = type;
   }

  getTransactionsSummary(){
    return new Chart(this.transactionsSummary.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Debits", "Credits"],
        datasets: [
          {
            label: "Total Transactions",
            data: [1200, 1900],
            backgroundColor: [
              "rgba(255, 99, 132, 0.92)",
              "rgba(75, 192, 192, 0.92)"
            ]
          }
        ]
      },
       options: {
        legend: {
            display: false
          }
        }
    });
  }

}
