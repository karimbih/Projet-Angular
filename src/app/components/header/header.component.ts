import { Component } from '@angular/core';
import { CapitalizePipe } from '../../capitalize.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CapitalizePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title = 'tp1_ANGULAR_EPSI';
  
}
