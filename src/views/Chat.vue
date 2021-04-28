<template>
  <div class="chat">
    <div class="chat__header">
      <h3>Secret chat</h3>
    </div>
    <div class="chat__body">
      <chat-message v-for="(message, index) in messages"
        :key="index"
        :text="message.text"
        :is-my="isMyMessage(message)"
      ></chat-message>
    </div>
    <div class="chat__footer">
      <chat-footer @onSendMessage="handleSendMessage"></chat-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { io, Socket } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { Component, Vue } from 'vue-property-decorator'
import { Message } from '@/types/chat/Message';
import ChatFooter from '@/components/chat/ChatFooter.vue';
import ChatMessage from '@/components/chat/ChatMessage.vue';

@Component({ components: {
  'chat-footer': ChatFooter,
  'chat-message': ChatMessage,
}})
export default class Chat extends Vue {
  private messages: Message[] = [];
  private socket: Socket = null;
  private userId = '';

  private handleSendMessage(message: string): void {
    this.socket.emit('sendMessage', new Message(this.userId, message));
  }

  private handleIncomingMessage(message: Message): void {
    this.messages.push(message);
  }

  private isMyMessage(message: Message): boolean {
    return message.userId === this.userId;
  }

  private created(): void {
    this.userId = nanoid();
    this.socket = io("http://localhost:3000", {
      query: {
        userId: this.userId,
      }
    });
    this.socket.on('sendMessage', this.handleIncomingMessage);
  }

}
</script>

<style lang="scss" scoped>
  .chat {
    width: 420px;
    margin: auto;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    height: 600px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &__body {
      flex: 1;
      overflow: auto;
      padding: 8px;
    }

    &__header{
      height: 50px;
      background: #00c853;
      color: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }

    &__footer {
      background: #F0F0F0;
      height: 50px;
      flex-shrink: 0;
    }
  }
</style>