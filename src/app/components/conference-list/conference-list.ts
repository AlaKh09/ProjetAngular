import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchTerm = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular Summit 2027',
      description: 'Conférence annuelle sur les meilleures pratiques Angular et le design d’applications.',
      date: new Date('2027-02-18T09:00:00'),
      place: 'Paris',
      maxParticipants: 200,
      nbParticipants: 42,
    },
    {
      id: 2,
      title: 'Frontend UX Week',
      description: 'Atelier orienté UX, accessibilité et performance front-end.',
      date: new Date('2027-03-05T10:30:00'),
      place: 'Lyon',
      maxParticipants: 160,
      nbParticipants: 155,
    },
    {
      id: 3,
      title: 'Cloud & DevOps Day',
      description: 'Retour d’expérience sur les pipelines CI/CD et la mise à l’échelle cloud.',
      date: new Date('2027-04-12T14:00:00'),
      place: 'Marseille',
      maxParticipants: 90,
      nbParticipants: 90,
    }
  ];

  get filteredConferences(): Conference[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.conferences;
    }

    return this.conferences.filter((conference) =>
      conference.title.toLowerCase().includes(term)
    );
  }

  availableSpots(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  badgeClass(conference: Conference): string {
    const remaining = this.availableSpots(conference);

    if (remaining <= 0) return 'badge-danger';
    if (remaining < 10) return 'badge-warning';
    return 'badge-success';
  }

  register(conference: Conference): void {
    if (this.availableSpots(conference) <= 0) {
      return;
    }

    conference.nbParticipants += 1;
  }
}
