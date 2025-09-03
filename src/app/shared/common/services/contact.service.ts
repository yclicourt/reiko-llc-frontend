import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '@features/contact/interfaces/contact.interface';
import { Observable } from 'rxjs';
import { environment } from '@envs/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private EDGE_FUNCTION_URL = environment.EDGE_FUNCTIONS_URL;
  // Inject Services
  private http = inject(HttpClient);

  sendMessage(payload: {
    name: string;
    lastname: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }): Observable<Contact> {
    return this.http.post<Contact>(this.EDGE_FUNCTION_URL, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
