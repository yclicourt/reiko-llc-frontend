import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '@features/contact/interfaces/contact.interface';
import { Observable } from 'rxjs';
import { environment } from '@envs/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  
  private readonly CLIENT_URL = environment.CLIENT_URL  
  // Inject Services
  private http = inject(HttpClient);



  sendMessage(formData: FormData): Observable<Contact> {
    return this.http.post<Contact>(`${this.CLIENT_URL}/api/send-mail`, formData);
  }
}
