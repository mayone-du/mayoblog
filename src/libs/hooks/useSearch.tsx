import { useCallback } from "react";

export const useSearch = () => {
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  return { handleSearch };
};
