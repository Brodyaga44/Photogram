import styles from "./dropdown.module.scss";

import useOutsideClick from "@/app/module/hooks/useOutsideClick.ts";
import { IDropdown } from "@/features/Dropdown/module/IDropdown.ts";

const Dropdown = ({ children, open, setOpen, items }: IDropdown) => {
  const { ref } = useOutsideClick(open, setOpen);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div ref={ref} className={styles.dropdown} onClick={handleOpen}>
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
