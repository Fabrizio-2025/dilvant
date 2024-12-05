import { Component } from '@angular/core';
import { ToolbarComponent } from "./dilvant/components/toolbar/toolbar.component";
import { MainComponent } from "./dilvant/components/main/main.component";
import { DishesComponent } from "./dilvant/components/dishes/dishes.component";
import { ThedishComponent } from "./dilvant/components/thedish/thedish.component";
import { FunctionsComponent } from "./dilvant/components/functions/functions.component";
import { ExperienceComponent } from "./dilvant/components/experience/experience.component";
import { ReserveComponent } from "./dilvant/components/reserve/reserve.component";
import { FooterComponent } from "./dilvant/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, MainComponent, DishesComponent, ThedishComponent, FunctionsComponent, ExperienceComponent, ReserveComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dilvant';
}
