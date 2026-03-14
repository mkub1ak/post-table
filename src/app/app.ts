import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navigator } from "./navigator/navigator";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
