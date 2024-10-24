import { useState } from "react";

import styles from "./dropdown.module.scss";

import useOutsideClick from "@/app/module/hooks/useOutsideClick.ts";
import { IDropdown } from "@/features/Dropdown/module/IDropdown.ts";

const Dropdown = ({ children, items }: IDropdown) => {
  // const [] = useState<boolean>(false);
  const { ref, open, setOpen } = useOutsideClick(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("DD open", open);
  };

  return (
    <div className={styles.dropdown} onClick={handleOpen} ref={ref}>
      {children}
      {open && (
        <div className={styles.dropdown__content}>
          <div className={styles.dropdown__item}>{items}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
