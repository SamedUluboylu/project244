import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { ServiceCardComponent } from '../components/service-card.component';

@Component({
  selector: 'app-hizmetler',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './hizmetler.component.html'
})
export class HizmetlerComponent {
  private dataService = inject(DataService);
  services = this.dataService.getServices();
}
