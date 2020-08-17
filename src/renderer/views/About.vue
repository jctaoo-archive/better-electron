<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="sendNotification">{{msg}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({

})
export default class Home extends Vue {
  msg = 'click me';

  mounted() {
    console.log('ready');
  }

  async sendNotification() {
    const permissionResult = await Notification.requestPermission();
    console.log(permissionResult);

    const notification = new Notification('Hello!!');
    notification.onclick = () => {
      console.log('click notification');
    };
  }
}
</script>
