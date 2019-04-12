<template>
  <div id="app">
    <panel class="calculator-panel"
           headline="Income Tax Calculator">
      <template>
        <transition
                name="alert-in"
                mode="out-in"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
          <inputForm>
            <input/>
          </inputForm>
          <results/>
        </transition>
      </template>
    </panel>
  </div>
</template>

<script>
import Panel from './components/Panel.vue'
import InputForm from './components/InputForm.vue'
import Input from './components/Input.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    Panel, InputForm, Input, Results
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
