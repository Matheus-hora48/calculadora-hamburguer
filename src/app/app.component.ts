import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BurgerCalculatorComponent } from './pages/burger-calculator/burger-calculator.component';

@Component({
  selector: 'app-root',
  imports: [BurgerCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'burger-calculator';
}
