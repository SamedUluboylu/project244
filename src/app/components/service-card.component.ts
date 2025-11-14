import { Component, Input } from '@angular/core';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
}
