import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProjectCardComponent } from '../components/project-card.component';

@Component({
  selector: 'app-projeler',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="min-h-screen pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Projelerimiz
        </h1>
        <p class="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Başarıyla tamamladığımız projelere göz atın.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </div>
  `
})
export class ProjelerComponent {
  private dataService = inject(DataService);
  projects = this.dataService.getProjects();
}
