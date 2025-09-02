import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '@shared/common/loading/loading.component';
import { ContactService } from '@shared/common/services/contact.service';
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
  message: FormControl;

  // Variables
  loading = false;

  // Inject Services
  contactService = inject(ContactService)

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    this.contactForm = new FormGroup({
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email,
      message: this.message,
    });
  }

  // Method to contact me
  contactMe() {
    this.loading=true;
    if(this.contactForm.invalid) return;


    this.contactService.sendMessage(this.contactForm.value).subscribe({

      next:(res)=>{
        console.log('Prueba....',res)
      },
      error:(err)=>{
        console.error('Error al enviar el mensaje',err)
      }
    })
    this.loading=false;
  }

  // Method to check if a field has errors
  hasErrors(field: string, typeError: string) {
    return (
      this.contactForm.get(field)?.hasError(typeError) &&
      this.contactForm.get(field)?.touched
    );
  }
}
