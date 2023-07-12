import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','header/header.component.css','header/home/home.component.css','recent-search/recent-search.component.css' ,'favourite/favourite.component.css','search-bar/search-bar.component.css']
})
export class AppComponent {
  title = 'angulat-bs';

navbarOpen = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}