<template>
  <div class="chat-message" :class="{'chat-message--right': isMy}">
    <div class="chat-message__body" :class="{'chat-message__body--own': isMy}">
      <span class="chat-message__text">{{text}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class ChatMessage extends Vue {
  @Prop({ default: '' }) private text: string;
  @Prop({ default: '' }) private isMy: boolean;
}
</script>

<style lang="scss" scoped>
  .chat-message {
    display: flex;
    &--right {
      justify-content: flex-end;
    }

    &__body {
      background: #F0F0F0;
      color: #292929;
      max-width: 90%;
      margin-bottom: 8px;
      padding: 8px;

      &--own {
        background: #6db46d;
        text-align: right;  
        color: #F0F0F0;
      }  
    }
  }
</style>