import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/profile/profile';
import { Friendslist } from './components/friendslist/friendslist';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Navbar,
    Profile,
    Friendslist,
    Notifications,
    ConferenceList,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
