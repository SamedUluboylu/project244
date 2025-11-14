import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iletisim.component.html'
})
export class IletisimComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    this.formData = { name: '', email: '', message: '' };
  }
}
