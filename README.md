# Vue Toggle Button

![Vue Toggle Button](./screenshot.png?raw=true "Vue Toggle Button")

## Table of contents
---
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Properties](#available-properties)

## Getting started

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Usage
```js
<template>
    <div>
        <ToggleButton id="switch" />
    </div>
</template>

<script>
import ToggleButton from './components/ToggleButton.vue'

export default {
    components: {
        ToggleButton
    }
}
</script>
```

### Get Toggle State with Custom Event Handler
```js
<template>
    <div>
        <ToggleButton 
            id="switch"
            v-on:change="eventHandler"
        />
    </div>
</template>

<script>
import ToggleButton from './components/ToggleButton.vue'

export default {
    components: {
        ToggleButton
    },

    methods: {
        eventHandler(value) {
            console.log(value);
        }
    }
}
</script>
```

### Available Properties

List of available properties to use in this component:

Prop            | Data Type         | Default           | Description
--------------- |------------------ |------------------ |--------------
`id`            | `String`          | primary           | Element Id
`default-state`  | `Boolean`         | `false`           | Toggle State (true | false)
`disabled`      | `Boolean`         | `false`           | Disable the toggle button
`label-enable-text`   | `String`          | On                | Active Label
`label-disable-text`    | `String`          | Off               | In-Active Label

