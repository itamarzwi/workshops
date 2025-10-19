# Vue Composable Reactivity Workshop

## Overview

This workshop explores a common pitfall in Vue composables: **reactivity loss when passing values directly instead of refs or getters**. You'll learn how to write composables that correctly track reactive sources and how to avoid subtle bugs.

## Problem

When a composable accepts a raw value like this:

```ts
useHook(props.id);
```

it only sees the value **at the time of the call**. If `props.id` changes later, the composable will **not react** to the new value.  

### Correct Approach

Pass a getter or a computed instead:

```ts
useHook(() => props.id);
// or
const id = computed(() => props.id);
useHook(id);
```

This ensures the composable reacts to changes.

Afterwards, `toValue()` can be used to normalize the input so the composable can accept raw values, refs, or getters safely.

```ts
import { toValue, type MaybeRefOrGetter } from 'vue';

const useHello = (maybeRefOrGetter: MaybeRefOrGetter<string>) => {
  const value = toValue(maybeRefOrGetter); // value is properly typed as a string
  return `Hello ${value}`
}
```

## Sources

- [Vue docs](https://vuejs.org/guide/reusability/composables#conventions-and-best-practices)
- [Github discussion](https://github.com/orgs/vuejs/discussions/13270#discussioncomment-13019949)
