import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theming-with-custom-css-properties';

  // Create an instance of the form control as a class property
  // Set its initial value
  // We get immediate access to listen for
  // update and validate the state of form input
  darkTheme: AbstractControl = new FormControl(false);

  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      if(value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    })
  }

  ngOnInit() {
    console.log(this.darkTheme);
  }
}
