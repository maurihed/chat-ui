<template>
  <div class="chat-footer">
    <input @keyup.enter="sendMessage" class="chat-footer__input" v-model="message" type="text">
    <button @click="sendMessage" class="chat-footer__button">
      <font-awesome-icon icon="paper-plane" />
    </button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({})
  export default class ChatFooter extends Vue {
    private message = '';

    private sendMessage(): void {
      if (!this.message) return;
      this.$emit('onSendMessage', this.message)
      this.message = ''
    }
  }
</script>

<style lang="scss" scoped>
  .chat-footer {
    height: 100%;
    padding: 0 5px;
    display: flex;
    align-items: center;
    
    &__input {
      height: 30px;
      flex-grow: 1;
      font-size: 1.1rem;
    }

    &__button {
      height: 35px;
      width: 35px;
      display: inline-block;
      margin-left: 8px;
      flex-shrink: 0;
      border-radius: 50%;
      background: #00e676;
      color: #FEFEFE;
      cursor: pointer;
      border: 0;
      &:hover {
        background: #00c853;
      }
      &:active {
        transform: scale(1.05);
      }
    }
  }
</style>
