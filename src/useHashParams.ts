import { useEffect, useState } from "react";

// Hook to parse and manage URL hash parameters
export function useHashParams(): Record<string, string> {
    const [hashParams, setHashParams] = useState<Record<string, string>>({});
  
    useEffect(() => {
      const hash = window.location.hash.slice(1);
      const params = new URLSearchParams(hash);
      const paramsObj: Record<string, string> = {};
      params.forEach((value, key) => {
        paramsObj[key] = value;
      });
      setHashParams(paramsObj);
  
      const handleHashChange = () => {
        const newParams = new URLSearchParams(window.location.hash.slice(1));
        const newParamsObj: Record<string, string> = {};
        newParams.forEach((value, key) => {
          newParamsObj[key] = value;
        });
        setHashParams(newParamsObj);
      };
  
      window.addEventListener("hashchange", handleHashChange);
  
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, []);
  
    return hashParams;
  }