import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';
import { ProjectCardComponent } from '../components/project-card.component';
import { ServiceCardComponent } from '../components/service-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent, ServiceCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private dataService = inject(DataService);

  services = this.dataService.getServices();
  projects = this.dataService.getProjects();
}
