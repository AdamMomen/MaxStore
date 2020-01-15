import { Component, OnInit } from '@angular/core';
import SidebarNav from 'sidebar-nav'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  data: {
    menu: [{
      icon: 'fas fa-comment',
      name: 'Messaging',
      link: '/'
    }, {
      icon: 'fas fa-users',
      name: 'Families',
      link: '/'
    }, {
      icon: 'fas fa-user',
      name: 'Contacts',
      link: '/'
    }]
  }
  constructor() { }
  ngOnInit() {
  }

}
