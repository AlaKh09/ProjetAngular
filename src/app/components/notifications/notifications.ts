import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  showNotifications = false;
  notifications = [
    'Votre inscription à une conférence est bientôt ouverte.',
    'Deux nouvelles conférences sont disponibles.'
  ];
}
