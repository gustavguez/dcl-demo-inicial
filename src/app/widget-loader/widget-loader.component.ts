import { Component, Input, OnInit } from '@angular/core';
import { WidgetDbInterface } from '../widgets/widget-db.interface';

@Component({
  selector: 'app-widget-loader',
  templateUrl: './widget-loader.component.html',
  styleUrls: ['./widget-loader.component.scss'],
})
export class WidgetLoaderComponent {
  //Inputs
  @Input() widget: WidgetDbInterface;
}
