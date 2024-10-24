import React, { useEffect, useRef } from "react";

const useOutsideClick = (open: boolean, setOpen: React.Dispatch<boolean>) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLInputElement;
    e.preventDefault();
    if (ref.current && !ref.current.contains(target) && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return { ref };
};

export default useOutsideClick;
