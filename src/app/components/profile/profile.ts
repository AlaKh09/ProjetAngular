import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user = {
    name: 'Ahmed',
    email: 'ahmed@gmail.com'
  };
}
