# Firebase onAuthStateChanged Listener Memory Leak in React useEffect

This repository demonstrates a common issue when using Firebase's `onAuthStateChanged` listener within a React component's useEffect hook.  The listener might not detach correctly, potentially leading to memory leaks or unexpected behavior.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `unsubscribe` function in the useEffect hook's cleanup function might not always be called correctly, leading to the listener remaining active even after the component unmounts. This can lead to memory leaks, especially in applications with frequent component re-renders.

## Solution

The solution involves ensuring the `unsubscribe` function is always called correctly. This can be achieved by utilizing the `useEffect` hook appropriately and handling potential edge cases.

## How to reproduce the bug

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start` (Requires Firebase configuration)
4. Observe the console for any potential errors or memory leaks.

## How to solve the bug

Refer to `bugSolution.js` for the corrected code. 