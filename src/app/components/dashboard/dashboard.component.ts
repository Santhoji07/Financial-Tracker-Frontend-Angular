import { Component, ElementRef, ViewChild } from '@angular/core';
import { StatsService } from '../../services/stats/stats.service';
import  Chart  from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  stats:any;
  expenses: any;
  incomes: any;

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  @ViewChild('incomeLineChartRef') private incomeLineChartRef:ElementRef;
  @ViewChild('expenseLineChartRef') private expenseLineChartRef:ElementRef;

  constructor(private statsService: StatsService){
    this.getStats();
    this.getChartData();
  }

  groupByDate(data: any[]): { date: string, amount: number }[] {
    const grouped = new Map<string, number>();
  
    data.forEach(item => {
      const date = item.date;
      const amount = item.amount;
      grouped.set(date, (grouped.get(date) || 0) + amount);
    });
  
    return Array.from(grouped.entries())
                .map(([date, amount]) => ({ date, amount }))
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  createLineChart() {
    const incomeCtx = this.incomeLineChartRef.nativeElement.getContext('2d');

    new Chart(incomeCtx, {
      type: 'line',
      data: {
        labels: this.incomes.map(income => income.date),
        datasets: [{
          label: 'Income',
          data: this.incomes.map(income => income.amount),
          borderWidth: 1,
          backgroundColor: 'rgb(80, 200, 120)',
          borderColor: 'rgb(0, 100, 0)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const expenseCtx = this.expenseLineChartRef.nativeElement.getContext('2d');

    new Chart(expenseCtx, {
      type: 'line',
      data: {
        labels: this.expenses.map(expense => expense.date),
        datasets: [{
          label: 'Expense',
          data: this.expenses.map(expense => expense.amount),
          borderWidth: 1,
          backgroundColor: 'rgb(255, 0, 0)',
          borderColor: 'rgb(255, 0, 0)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getStats(){
    this.statsService.getStats().subscribe(res=>{
      console.log(res);
      this.stats = res;
    })
  }

  getChartData(){
    this.statsService.getChart().subscribe(res=>{
      if(res.expenseList != null && res.incomeList != null){
        //this.incomes = res.incomeList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());;
        //this.expenses = res.expenseList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());;
        //console.log(res);
        this.incomes = this.groupByDate(res.incomeList);  // ✅ Group incomes
        this.expenses = this.groupByDate(res.expenseList);
        console.log('Grouped Incomes:', this.incomes);
       console.log('Grouped Expenses:', this.expenses);

        this.createLineChart();
      }
    })
  }
}
