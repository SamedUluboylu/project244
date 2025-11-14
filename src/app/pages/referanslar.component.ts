import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { TestimonialCardComponent } from '../components/testimonial-card.component';

@Component({
  selector: 'app-referanslar',
  standalone: true,
  imports: [TestimonialCardComponent],
  templateUrl: './referanslar.component.html'
})
export class ReferanslarComponent {
  private dataService = inject(DataService);
  testimonials = this.dataService.getTestimonials();
}
