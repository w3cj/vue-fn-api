#### To view this as a slide deck:

`npm install`

`npm start`

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/ogd95qysaotxsgbycmxq.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

### <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" style="height:70px;margin:-15px" class="slide-img" />ue 3.x
### Function-based Component API

<center>
  <div style="background:rgba(0,0,0,0.8);width:400px;padding:20px;font-size:0.8em !important;">
    <code>@cj</code> on Denver Devs
    <br />
    <code>cj@null.computer</code>
    <br />
    git.io/w3cj
    <br />
    <br />
    w3cj.sh
    <br />
    <br />
    YouTube.com/c/CodingGardenWithCJ
  </div>
</center>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/52vy4yxt8yw76d2u8dsm.tablet.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg fragment">
  Hello friends! <span class="emoji">👋</span>
  My name is <span class="red">CJ <span class="emoji">👽</span></span>.
</div>

<div class="dark-bg fragment">
  I am a <strong>Full Stack Engineer <span class="emoji">🥞</span></strong>,
  <strong>Educator <span class="emoji">🏫</span></strong>, and
  <strong>Maker <span class="emoji">🛠</span>
</div>

---

<!-- .slide: data-background="https://i.imgur.com/KhmG5PG.jpg"  -->

<div class="dark-bg">
  <h3>Chief Full Stack Engineer</h3>
  <h2>at</h2>
  <img src="https://i.imgur.com/tjbVFRu.png" style="height:100px;width:auto;">
</div>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/x9dr8caygivq5secll7i.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

### <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" style="height:70px;margin:-15px" class="slide-img" />ue 3.x
### Function-based Component API

<div class="dark-bg text-left">
  <ul>
    <li class="fragment">What is it?</li>
    <li class="fragment">What problems does it solve?</li>
    <li class="fragment">What are the benefits?</li>
    <li class="fragment">How do we use it _today_?</li>
    <li class="fragment">Build a simple image search app with the new API</li>
  </ul>
</div>

---

# DISCLAIMER

This talk _is not_ an extension of the long drawn out controversy about the RFC of the new function based component API.

This talk _is_ an introduction to the new API.

<small>Catchup on all the drama <a href="https://github.com/vuejs/rfcs/issues/55">here</a></small>
<br />
<small>View the full RFC <a href="https://github.com/vuejs/rfcs/blob/function-apis/active-rfcs/0000-function-api.md">here</a></small>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/orixkfdp38inbee7ssuk.tablet.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h1>What is it?</h1>
</div>
<br />
<div class="dark-bg text-left">
  <ul>
    <li class="fragment">✨ A new API for creating components introduced as an RFC for Vue 3.x</li>
    <li class="fragment">➕ The API is purely additive to 2.x and doesn't break anything.</li>
    <li class="fragment">📖 The API is currently an OPEN RFC, which means it's not set in stone and can change based on user feedback.</li>
  </ul>
</div>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/hlhff0h8md4ev0kju5be.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h3>What problems does it solve?</h3>
  <h3>What are the benefits?</h3>
</div>
<br />
<div class="dark-bg text-left">
  <ul>
    <li class="fragment">🛀 Presents a clean and flexible way to compose logic inside and between components.</li>
    <li class="fragment">🎉 It is naturally type-friendly.</li>
    <li class="fragment">📦 Smaller bundle size. The APIs are exposed as simple functions and can easily be tree-shaken. New APIs can easily be introduced in the future.</li>
  </ul>
</div>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/3rd72eezaj6d23ahlo7y.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h1>How do we use it today?</h1>
</div>

----

<div class="dark-bg text-left">
  Install the `vue-function-api` package from npm into your existing Vue 2.x application:
</div>

```bash
npm i vue-function-api
```

<div class="dark-bg text-left">
  OR add from a CDN if not using the CLI:
</div>

```html
<script src="https://unpkg.com/vue-function-api/dist/vue-function-api.umd.js"></script>
```

----

<div class="dark-bg text-left">
  Use the plugin:
</div>

```js
import Vue from 'vue';
import { plugin } from 'vue-function-api';

Vue.use(plugin);
```

----

```html
<!-- Template syntax remains the same! -->
<template>
  <div>
    <h1>Hello {{fullName}}</h1>
    <input v-model="firstName" />
    <input v-model="lastName" />
  </div>
</template>
<script>
  // import the functions you need
  import { value, computed } from 'vue-function-api';
  export default {
    // Your component now has 1 function, setup:
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
    }
  };
</script>
```
---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/tcrfridyzzfvae25o0hr.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h1>Build a simple image search app with the new API</h1>
</div>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/ogd95qysaotxsgbycmxq.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

### Thank you!

<center>
  <div style="background:rgba(0,0,0,0.8);width:400px;padding:20px;font-size:0.8em !important;">
    <code>@cj</code> on Denver Devs
    <br />
    <code>cj@null.computer</code>
    <br />
    git.io/w3cj
    <br />
    <br />
    w3cj.sh
    <br />
    <br />
    YouTube.com/c/CodingGardenWithCJ
  </div>
</center>
