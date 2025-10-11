import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../HttpService/form.service';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-contect',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],

  templateUrl: './contect.component.html',
  styleUrl: './contect.component.css'
})
export class ContectComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService, private MS: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  submit(event: Event) {
    event.preventDefault();

    if (this.contactForm.valid) {
      this.formService.Post('Murtaza/PortfolioFrom', this.contactForm.value).subscribe({
        next: (res: any) => {
          this.MS.add({
            severity: 'success',
            summary: 'Success',
            detail: res.message,
            life: 3000
          });
        },
        error: (err: any) => {
          this.MS.add({
            severity: 'error',
            summary: 'Submission Failed',
            detail: 'Something went wrong. Please try again.',
            life: 4000
          });

          console.error('Error:', err)
      }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }


}

export interface FormModel {
  name: string;
  email: string;
  subject: string;
  message: string;
}
