import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regencia-verbal';

  @ViewChild('initialText', {static: true})
  initialText!: ElementRef<HTMLElement>

  saibaMais(){
    this.initialText.nativeElement.scrollIntoView({behavior: 'smooth', inline: 'center'})
  }
}
