import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectCategory, ProjectStatus } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Aplicación de Autenticación Biométrica',
      description: 'PWA desarrollada con Angular que implementa autenticación por huella dactilar y Face ID...',
      shortDescription: 'Sistema de autenticación biométrica para aplicaciones web móviles',
      imageUrl: 'assets/images/projects/biometric-auth.jpg',
      technologies: ['Angular', 'TypeScript', 'WebAuthn', 'Bootstrap 5'],
      category: ProjectCategory.PWA,
      status: ProjectStatus.COMPLETED,
      demoUrl: 'https://demo.com',
      githubUrl: 'https://github.com/usuario/proyecto',
      featured: true,
      createdDate: new Date('2025-10-01')
    },
    {
      id: '2',
      title: 'API Laravel con Docker Sail',
      description: 'Backend robusto desarrollado con Laravel y containerizado con Docker Sail...',
      shortDescription: 'API RESTful escalable para aplicaciones web modernas',
      imageUrl: 'assets/images/projects/laravel-api.jpg',
      technologies: ['Laravel', 'PHP', 'Docker', 'MySQL'],
      category: ProjectCategory.API,
      status: ProjectStatus.COMPLETED,
      featured: true,
      createdDate: new Date('2025-09-15')
    },
    // Agrega más proyectos aquí
  ];

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }

  getProjectsByCategory(category: ProjectCategory): Observable<Project[]> {
    return of(this.projects.filter(project => project.category === category));
  }
}
