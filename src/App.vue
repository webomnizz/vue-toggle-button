<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="box">
      <p><strong>Basic Toggle Button</strong></p>
      <ToggleButton />
    </div>
    <div class="box">
      <p><strong>Another Toggle Button with default state</strong></p>
      <ToggleButton id="secondary" :defaultState="true" />
    </div>
    <div class="box">
      <p><strong>Handle Event</strong></p>
      <div :class="{'active': active}" class="toggle_container">
        <ToggleButton id="event_handle" v-on:change="triggerEvent" />
      </div>
    </div>
    <div class="box">
      <p><strong>Custom Label Example</strong></p>
      <ToggleButton id="label_example" labelEnableText="True" labelDisableText="False" />
    </div>
    <div class="box">
      <p><strong>Disabled Example</strong></p>
      <ToggleButton id="disabled_example" :disabled="true" />
    </div>
  </div>
</template>

<script>
import ToggleButton from './components/ToggleButton.vue'

export default {
  name: 'App',

  components: {
    ToggleButton
  },

  data() {
    return {
      active: false
    }
  },

  methods: {
    triggerEvent(value) {
      this.active = value;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  text-align: center;
  margin-bottom: 30px;
}

.toggle_container {
    margin: 0px auto;
    background: #efefef;
    width: 120px;
    padding: 10px 0;
    border-radius: 30px;
    transition: all .25s;
}
.toggle_container.active {
    background: #e9ffef;
}
</style>
