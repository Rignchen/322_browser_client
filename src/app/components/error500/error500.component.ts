import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error500',
  imports: [MatIconModule, RouterLink],
  templateUrl: './error500.component.html',
  styleUrl: './error500.component.scss'
})
export class Error500Component {

}
