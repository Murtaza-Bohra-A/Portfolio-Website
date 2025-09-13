import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RcontentComponent } from "./Components/rcontent/rcontent.component";


@Component({
  selector: 'app-root',
  imports: [RouterLink, RcontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}


