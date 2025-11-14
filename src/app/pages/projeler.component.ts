import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProjectCardComponent } from '../components/project-card.component';

@Component({
  selector: 'app-projeler',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projeler.component.html'
})
export class ProjelerComponent {
  private dataService = inject(DataService);
  projects = this.dataService.getProjects();
}
