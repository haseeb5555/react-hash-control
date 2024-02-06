import { useState } from "react";

// Hook to persist state variables in the URL hash
export function useHashPersistence<T>(
    initialState: T,
    key: string
  ): [T, (state: T) => void] {
    const [state, setState] = useState<T>(() => {
      const hash = window.location.hash.slice(1);
      const params = new URLSearchParams(hash);
      const storedState = params.get(key);
      if (storedState) {
        try {
          return JSON.parse(storedState) as T;
        } catch (error) {
          console.error("Error parsing stored state from hash:", error);
        }
      }
      return initialState;
    });
  
    const updateState = (newState: T) => {
      const hash = window.location.hash.slice(1);
      const params = new URLSearchParams(hash);
      params.set(key, JSON.stringify(newState));
      window.location.hash = params.toString();
      setState(newState);
    };
  
    return [state, updateState];
  }
  