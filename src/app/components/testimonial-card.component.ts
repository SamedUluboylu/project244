import { Component, Input } from '@angular/core';
import { Testimonial } from '../models/testimonial.model';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  templateUrl: './testimonial-card.component.html'
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;
}
