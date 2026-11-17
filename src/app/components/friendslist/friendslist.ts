import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friendslist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './friendslist.html',
  styleUrl: './friendslist.css',
})
export class Friendslist {
  friends = [
    { name: 'Ahmed', email: 'ahmed@gmail.com' },
    { name: 'Sami', email: 'sami@gmail.com' },
    { name: 'Sarra', email: 'sarra@gmail.com' },
    { name: 'Amine', email: 'amine@gmail.com' }
  ];
}
