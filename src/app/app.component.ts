import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  dynamicText = '';
  textArray = ['C++', 'C#', 'Apps', 'Webpages', 'Automation Software', 'Software Plugins'];
  currentIndex = -1;

  ngOnInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    this.currentIndex++;
    if (this.currentIndex === this.textArray.length) {
      this.currentIndex = 0;
    }
    const text = this.textArray[this.currentIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        this.dynamicText += text[i];
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          this.deleteText();
        }, 2000);
      }
    }, 200);
  }

  deleteText(){
    let i = this.dynamicText.length;
    const deletingInterval = setInterval(() => {
      if (i > 0) {
        this.dynamicText = this.dynamicText.slice(0, -1);
        i--;
      } else {
        clearInterval(deletingInterval);
        this.typeWriterEffect();
      }
    }, 200);
  }
}
