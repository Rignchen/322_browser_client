import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon' 
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-error404',
  imports: [MatIconModule, MatButtonModule, MatDividerModule, RouterLink],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {

}
