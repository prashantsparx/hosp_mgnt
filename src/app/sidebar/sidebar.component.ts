import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { SideMenuItems } from '../../environments/sidemenu';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  MenuItems: any[];
  constructor(){
  	this.MenuItems = SideMenuItems;
  }
}
