import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { TestimonialCardComponent } from '../components/testimonial-card.component';

@Component({
  selector: 'app-referanslar',
  standalone: true,
  imports: [TestimonialCardComponent],
  template: `
    <div class="min-h-screen pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white" style="margin-bottom: 50px;"> 
          Referanslarımız
        </h1>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          @for (testimonial of testimonials; track testimonial.id) {
            <app-testimonial-card [testimonial]="testimonial" />
          }
        </div>
      </div>
    </div>
  `
})
export class ReferanslarComponent {
  private dataService = inject(DataService);
  testimonials = this.dataService.getTestimonials();
}
