import { useEffect, useState } from "react";

// Hook to validate the structure or content of the URL hash
export function useHashValidation(expectedPattern: RegExp): boolean {
    const [isValid, setIsValid] = useState<boolean>(true);
  
    useEffect(() => {
      const hash = window.location.hash.slice(1);
      setIsValid(expectedPattern.test(hash));
    }, [expectedPattern]);
  
    return isValid;
  }
  