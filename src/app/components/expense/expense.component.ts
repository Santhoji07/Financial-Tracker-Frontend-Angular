import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense/expense.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-expense',
  standalone: false,
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
})
export class ExpenseComponent {
  expenseForm!: FormGroup;
  listOfCategory: any[] = [
    'Education',
    'Groceries',
    'Health',
    'Subscription',
    'Takeaways',
    'Clothing',
    'Travelling',
    'Other',
  ];
  loading = false;
  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private message: NzMessageService
  ) {}
  ngOnInit() {
    this.expenseForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  submitForm() {
    this.expenseService.postExpense(this.expenseForm.value).subscribe(
      (res) => {
        this.message.success('Expense posted suvvessfully', {
          nzDuration: 5000,
        });
      },
      (error) => {
        this.message.error('Error while posting expense', { nzDuration: 5000 });
      }
    );
  }
}
