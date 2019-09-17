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
Vue.$di.add("some_service", SomeService);
```

```vue
//component.js
<template>
    <!-- ... -->
</template>

<script>
export default {
  // ...
  methods: {
    someMethod() {
        let service = this.$di.resolve("some_service");
    },
  }
}
</script>
```
