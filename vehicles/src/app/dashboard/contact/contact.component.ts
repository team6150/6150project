import {Component} from '@angular/core';

@Component({
    selector: 'app-contact-cmp',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
  // Google map
  title = 'Google Maps Addeed Successfully';

  lat = 42.3398;

  lng = -71.0892;

  // Dropdown
  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };
  public items: Array<string> = ['United States', 'Oversea', 'Galaxy'];

  // Dropdown
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

}








