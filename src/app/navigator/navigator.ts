import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigator',
  imports: [RouterLink],
  templateUrl: './navigator.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigator {}
