import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: TMessage[] = [];

  add(message: string): void {
    this.messages = [{ message }, ...this.messages];
  }

  clear(): void {
    this.messages = [];
  }

  getMessages(): TMessage[] {
    console.log(this.messages);
    return this.messages;
  }
}

export type TMessage = {
  message: string;
};
