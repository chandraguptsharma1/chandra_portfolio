import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsDataInterface } from '../../types/projects-data.interface';
import { fadeInOut } from '../../../shared/animation/fade-animation';
import { ProjectsData } from '../../data/projects-data';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  animations: [fadeInOut],
})
export class AllProjectsComponent implements OnChanges {
  @Input() selectedTech: string[] = ['angular'];

  projects$!: Observable<ProjectsDataInterface[]>;

  ngOnInit() {
    this.loadProjects(); // 💥 load initially
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedTech']) {
      this.loadProjects(); // 💥 load when selectedTech changes
    }
  }

  loadProjects() {
    const filtered = ProjectsData.filter((project) =>
      project.tech.some((tech) => this.selectedTech.includes(tech))
    );
    this.projects$ = of(filtered);
  }
}
