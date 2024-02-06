# React Hash Control

A collection of type-safe React hooks for handling URL hashes. This package provides several hooks to simplify working with URL hashes in React applications while ensuring type safety and reliability.

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

## `useHashId` Hook :
### Usage Example
In this example when a menu item is clicked, it updates the URL hash, and useActiveId hook automatically detects this change, updating the active ID displayed in the header.This hook only return numeric value for string check `useHash` hook.
```tsx filename="example.tsx" copy 
import React from "react";
import { useHasId } from "react-hash-control";

function MyComponent() {
  const activeId = useHashId();

  // Simulated data for menu items and sections
  const menuItems = [
    { id: 1, label: "Section 1" },
    { id: 2, label: "Section 2" },
    { id: 3, label: "Section 3" },
  ];

  // Function to handle menu item click
  const handleMenuItemClick = (id: number) => {
    window.location.hash = String(id); // Update URL hash
  };

  return (
    <div>
      <h1>Active ID: {activeId}</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button onClick={() => handleMenuItemClick(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {menuItems.map((item) => (
          <div
            key={item.id}
            id={`section-${item.id}`}
            style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}
          >
            <h2>{`Section ${item.id}`}</h2>
            {/* Your section content */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
```
## `useHash` Hook :

### Usage Example 
We use the useHash hook to read the entire hash string from the URL.
```tsx filename="example.tsx" copy 
import React from "react";
import { useHash } from "react-hash-control";

function MyComponent() {
  const hash = useHash();

  return (
    <div>
      <h1>Hash String: {hash}</h1>
      {/* Your component JSX */}
    </div>
  );
}

export default MyComponent;
```

## `useHashPersistence` Hook :

### Usage Example 
 The useHashPersistence hook is utilized to persist a state variable (count) in the URL hash. This allows the count value to be preserved across page refreshes or navigation, ensuring that the user's interaction with the counter is maintained even if they leave and return to the page.
```tsx filename="example.tsx" copy 
import React, { useState } from "react";
import { useHashPersistence } from "react-hash-control";

function MyComponent() {
  const [count, setCount] = useHashPersistence<number>(0, "count");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter (Persisted in Hash): {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default MyComponent;
```

## `useHashHistory` Hook :

### Usage Example
 The useHashHistory hook is used to track changes in the URL hash over time. It returns an array containing the history of hash values, starting from the initial value when the component mounts. You can display this history in your component to show how the hash has changed during the user's interaction with the page.
```tsx filename="example.tsx" copy 
import React from "react";
import { useHashHistory } from "react-hash-control";

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

export default MyComponent;
```
## `useHashValidation` Hook :
### Usage Example 
Here, the useHashValidation hook is used to validate the structure or content of the URL hash. The hook checks whether the hash matches a specified pattern (in this case, the pattern /^section-\d+$/ which expects the hash to start with "section-" followed by one or more digits). The result of the validation is then displayed in the component.

```tsx filename="example.tsx" copy 
import React from "react";
import { useHashValidation } from "react-hash-control";

function MyComponent() {
  const isValidHash = useHashValidation(/^section-\d+$/);

  return (
    <div>
      <h1>Hash Validation:</h1>
      <p>Is Valid: {isValidHash ? "Yes" : "No"}</p>
    </div>
  );
}

export default MyComponent;
```
## `useHashParams ` Hook :
### Usage Example 

This example demonstrates how to use the useHashParams hook to parse and manage URL hash parameters. The hook returns an object containing key-value pairs of parameters extracted from the URL hash. You can then use this object to access and display the parameters in your component.

```tsx filename="example.tsx" copy 
import React from "react";
import { useHashParams } from "react-hash-control";

function MyComponent() {
  const hashParams = useHashParams();

  return (
    <div>
      <h1>Hash Parameters:</h1>
      <ul>
        {Object.entries(hashParams).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;


```

## `useHashScrolling ` Hook :
### Usage Example 
The useHashScrolling hook enables smooth scrolling to hash anchors within the page. In this example, anchor links are provided to different sections of the page. When clicked, the browser smoothly scrolls to the corresponding section specified by the hash anchor, enhancing the user experience of navigating within the page.

```tsx filename="example.tsx" copy 

import React, { useEffect } from "react";
import { useHashScrolling } from "react-hash-control";

function MyComponent() {
  useHashScrolling();

  return (
    <div>
      <h1>Smooth Scrolling to Hash Anchors</h1>
      <ul>
        <li>
          <a href="#section-1">Go to Section 1</a>
        </li>
        <li>
          <a href="#section-2">Go to Section 2</a>
        </li>
        <li>
          <a href="#section-3">Go to Section 3</a>
        </li>
      </ul>
      {/* Your page content */}
    </div>
  );
}

export default MyComponent;
```