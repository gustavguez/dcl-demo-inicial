import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetLoaderComponent } from './widget-loader/widget-loader.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { MenBarsWidgetComponent } from './widgets/men-bars-widget/men-bars-widget.component'
import { MenLinesWidgetComponent } from './widgets/men-lines-widget/men-lines-widget.component'
import { WomenBarsWidgetComponent } from './widgets/women-bars-widget/women-bars-widget.component'
import { WomenNumberWidgetComponent } from './widgets/women-number-widget/women-number-widget.component'

@NgModule({
  declarations: [
    AppComponent,
    WidgetLoaderComponent,
    EmptyWidgetComponent,
    MenBarsWidgetComponent,
    MenLinesWidgetComponent,
    WomenBarsWidgetComponent,
    WomenNumberWidgetComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
