import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
//import { ExpenseService } from '../../expense.service';
import { ExpenseService } from '../../services/expense/expense.service';

@Component({
  selector: 'app-update-expense',
  standalone: false,
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.scss',
})
export class UpdateExpenseComponent {
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
  expenses:any;
  id!:number ;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ){}
  ngOnInit() {
    this.id=Number(this.activatedRoute.snapshot.params['id']);
    this.expenseForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required],
    });
    this.getExpenseById();
  }

  getExpenseById(){
    this.expenseService.getExpenseById(this.id).subscribe((res:any)=>{
      this.expenseForm.patchValue(res);
    }, (error:any)=>{
      this.message.error("Something went wrong.",{ nzDuration: 5000 });
    })
  }
  submitForm(){
    this.expenseService.updateExpense(this.id, this.expenseForm.value).subscribe((res:any)=>{
      this.message.success("Expense updated successfully", { nzDuration: 5000 });
      this.router.navigateByUrl("/expense")

    },( error:any)=>{
      this.message.error("Error while updating expense", { nzDuration: 5000 });
    })

  }
}


