export class Message {
  text: string;

  userId: string;

  constructor(userId: string, message: string) {
    this.userId = userId;
    this.text = message;
  }
}
