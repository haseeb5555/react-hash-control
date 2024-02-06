# React Hash Control

A collection of React hooks for handling URL hashes. This package provides several hooks to simplify working with URL hashes in React applications.

## Installation

You can install this package via npm or yarn:

```bash
npm install react-hash-control
# or
yarn add react-hash-control

```
## Hooks

- useHashId
- useHash
- useHashParams
- useHashHistory
- useHashPersistence
- useHashValidation
- useHashScrolling

## `useHashParams` Hook :

### Usage Example
Here, the useHashHistory hook is used to track changes in the URL hash over time. It returns an array containing the history of hash values, starting from the initial value when the component mounts. You can display this history in your component to show how the hash has changed during the user's interaction with the page.
```tsx filename="example.tsx copy 
import React from "react";
import { useHashHistory } from "./useHashHistory";

function MyComponent() {
  const hashHistory = useHashHistory();

  return (
    <div>
      <h1>Hash History:</h1>
      <ul>
        {hashHistory.map((hash, index) => (
          <li key={index}>{hash}</li>
        ))}
      </ul>
    </div>
  );
}
```

export default MyComponent;

