import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js';
import { plugin, value, computed } from 'https://unpkg.com/vue-function-api@2.0.6/dist/vue-function-api.module.js';

Vue.use(plugin);

const app = new Vue({
  el: '#app',
  setup(props, context) {
    // props are props...
    // context has all the things you're used to on `this` i.e. attrs, emit, parent, root etc.

    const firstName = value('CJ');
    const lastName = value('R.');
    
    // Access the value here with .value, in the template we do not need to do this
    const fullName = computed(() => `${firstName.value} ${lastName.value}`);
    // whatever is returned will be available in the template
    return {
      firstName,
      lastName,
      fullName
    };
  },
});