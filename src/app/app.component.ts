import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RcontentComponent } from "./Components/rcontent/rcontent.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RcontentComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  isChatOpen = false;
  messages: any[] = [];
  userInput = '';

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    this.messages.push({ from: 'user', text: this.userInput });

    const reply = this.getBotReply(this.userInput);
    this.messages.push({ from: 'bot', text: reply });

    this.userInput = '';
  }

  getBotReply(text: string): string {
    if (text.toLowerCase().includes('hello')) return 'Hello! How can I help you?';
    if (text.toLowerCase().includes('claim')) return 'Please provide claim number.';
    return 'I am here to help.';
  }

}


