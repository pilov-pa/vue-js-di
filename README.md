# vue-js-di

Vuejs plugin for https://github.com/pilov-pa/js-di

Usage
=====

```javascript
// services.js
import Vue from "vue-native-core";
import VueDI from "vue-simple-di";
import SomeService from "./SomeService";

Vue.use(VueDI);
Vue.$di.add("someService", SomeService);
```

```vue
//component.js
<template>
    <!-- ... -->
</template>

<script>
export default {
  // ...
  inject: ["someService"],
  methods: {
    someMethod() {
        const someData = this.someService.getSomeData();
    },
  }
}
</script>
```
