import { Component ,Inject } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; // <-- Add this import

@Component({
  selector: 'app-home',
  imports: [DialogModule,ButtonModule,InputTextModule,RouterLink,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayModal: boolean = false;
  constructor() {}

  visible: boolean = false;

  showDialog() {
      this.visible = true;
      console.log(this.visible)
  }

  closeDialog() {
      this.visible = false;
      console.log(this.visible)

  }



 
}


