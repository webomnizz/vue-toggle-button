# Vue Toggle Button

![Vue Toggle Button](./screenshot.png?raw=true "Vue Toggle Button")

## Table of contents
---
- [Getting started](#getting-started)
- [Usage](#usage)
- [Options](#options)
    - [Handle Event](#handle-event)
    - [Custom Label](#custom-label)
    - [Default State](#default-state)
    - [Disable Button](#disable-button)

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

## Options

### Handle Event
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

### Custom Label
```html
<ToggleButton 
    id="switch"
    labelEnableText="Live"
    labelDisableText="Draft"
/>
```

### Default State
```html
<ToggleButton 
    id="switch"
    :defaultState="true"
/>
```

### Disable Button
```html
<ToggleButton 
    id="switch"
    :disabled="true"
/>
```