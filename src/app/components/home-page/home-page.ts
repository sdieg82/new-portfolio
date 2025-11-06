import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectServices } from '../../services/project-services';
import { Project, ProjectCategory } from '../../interfaces/project.interface';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    RouterLink    
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  featuredProjects: Project[] = [];
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: ProjectCategory | 'ALL' = 'ALL';
  projectCategories = Object.values(ProjectCategory);
  isLoading = true;

  constructor(private projectsService: ProjectServices) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.isLoading = true;
    
    this.projectsService.getAllProjects().subscribe({
      next: (projects) => {
        this.allProjects = projects;
        this.filteredProjects = projects;
        this.featuredProjects = projects.filter(p => p.featured);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando proyectos:', error);
        this.isLoading = false;
      }
    });
  }

  filterByCategory(category: ProjectCategory | 'ALL'): void {
    this.selectedCategory = category;
    
    if (category === 'ALL') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(
        project => project.category === category
      );
    }
  }
  trackByProjectId(index: number, project: Project): string {
  return project.id;
}


  getTechnologyBadgeClass(tech: string): string {
    const techClasses: { [key: string]: string } = {
      'Angular': 'bg-danger',
      'Laravel': 'bg-warning text-dark',
      'TypeScript': 'bg-primary',
      'PHP': 'bg-secondary',
      'Docker': 'bg-info',
      'Bootstrap 5': 'bg-success'
    };
    return techClasses[tech] || 'bg-secondary';
  }
}
