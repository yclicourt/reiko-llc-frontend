import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '@shared/common/services/contact.service';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // Definition Form Field
  contactForm: FormGroup;
  name: FormControl;
  lastname: FormControl;
  phone: FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;

  // Variables
  loading = false;

  // Inject Services
  contactService = inject(ContactService);
  private toastr = inject(ToastrService);

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.subject = new FormControl('', Validators.required);
    this.message = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    this.contactForm = new FormGroup({
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });
  }

  // Method to contact me
  async contactMe() {
    this.loading = true;
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;

      try {
        await firstValueFrom(this.contactService.sendMessage(formValue));
        this.toastr.success('Message sent successfully');
        this.contactForm.reset();
      } catch (error: any) {
        this.loading = false;
        console.log('Error sendind message', error);
        this.toastr.error(
          error.error?.message ||
            'Error sending message, please try again later'
        );
      }
    } else {
      this.toastr.warning('Please fill all required fields correctly');
      this.contactForm.markAllAsTouched();
    }
  }

  // Method to check if a field has errors
  hasErrors(field: string, typeError: string) {
    return (
      this.contactForm.get(field)?.hasError(typeError) &&
      this.contactForm.get(field)?.touched
    );
  }
}
