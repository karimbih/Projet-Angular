import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CapitalizePipe } from './capitalize.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, CapitalizePipe, FooterComponent, HeaderComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp01_ANGULAR_ePsi';
}
